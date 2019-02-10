import { useState } from 'react'
import { DATA_URL } from 'constants'

const accept = {
  binary: ['image/png', 'image/jpeg'],
  text: ['text/plain', 'text/css', 'application/xml', 'text/html']
}

export function ImageUploader({
  data,
  url,
  host,
  id = 'imupldr',
  onSetDataUri,
  progress,
  onStart,
  onSuccess,
  onError
}) {
  const [uploading, setUploading] = useState(false)

  function handleFile(e) {
    const reader = new FileReader()
    const file = e.target.files[0]

    if (!file) return

    reader.onload = upload => onSetDataUri && onSetDataUri(upload.target.result)

    reader.readAsDataURL(file)
    upload(e, file)
  }

  async function upload(e, file) {
    onStart && onStart()

    const response = await fetch(`${DATA_URL}/_/sign-s3`)
    const { data, url, host } = await response.json()
    const xhr = new XMLHttpRequest()

    xhr.upload.addEventListener(
      'progress',
      e => {
        if (e.lengthComputable) {
          const percentage = Math.round((e.loaded * 100) / e.total)
          console.log(percentage)
          progress && progress(percentage)
        }
      },
      false
    )

    xhr.onreadystatechange = e => {
      if (xhr.readyState !== 4) return
      if (xhr.status >= 200 && xhr.status < 300) {
        const key = xhr.responseXML.getElementsByTagName('Key')[0].innerHTML
        onSuccess && onSuccess(`//${host}/${key}`)
      } else onError && onError()
    }

    xhr.upload.addEventListener('load', e => {}, false)

    xhr.open('POST', url)

    const body = new FormData()

    Object.keys(data).forEach(key => body.append(key, data[key]))
    body.append('file', file)

    xhr.send(body)
  }

  return (
    <input
      className="hidden"
      id={`${id}_file`}
      name={`${id}_file`}
      onChange={handleFile}
      type="file"
      accept="image/*"
    />
  )
}
