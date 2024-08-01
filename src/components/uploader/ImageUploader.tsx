// @ts-nocheck
import React, { useState, ChangeEvent } from 'react'
import { BACKEND_URL } from '../../../tc.config'

interface ImageUploaderProps {
  id: string
  onUpdateStatus(status: 'uploading' | 'success' | 'error' | undefined): void
  onSetImageUri(uri: string): void
  onSetDataUri(uri: string): void
  progress(p: Number): void
  retryRef(f: (e: any, file: File) => void): void
}

interface S3Signature {
  data: string
  url: string
  host: string
}

export function ImageUploader({
  id = 'imupldr',
  onSetDataUri,
  progress,
  onSetImageUri,
  onUpdateStatus,
  retryRef
}: ImageUploaderProps) {
  const [signature, setSignature] = useState<S3Signature | null>(null)
  const [mFile, setFile] = useState(null)

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    const file = e.target.files[0]

    if (!file) return

    reader.onload = (upload: ProgressEvent<FileReader>) =>
      onSetDataUri && onSetDataUri(upload.target.result as string)

    reader.readAsDataURL(file)
    setFile(mFile)
    upload(e, file)
  }

  async function upload(_e: React.ChangeEvent<HTMLInputElement>, file = mFile) {
    onUpdateStatus && onUpdateStatus('uploading')

    if (!signature) {
      const response = await fetch(`${BACKEND_URL}/_/sign-s3`)
      const signature: S3Signature = await response.json()
      setSignature(signature)
      var { data, url, host } = signature
    } else {
      var { data, url, host } = signature
    }

    const xhr = new XMLHttpRequest()

    xhr.upload.addEventListener(
      'progress',
      (e) => {
        if (e.lengthComputable) {
          const percentage = Math.round((e.loaded * 100) / e.total)
          progress && progress(percentage)
        }
      },
      false
    )

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return
      if (xhr.status >= 200 && xhr.status < 300) {
        const key = xhr.responseXML.getElementsByTagName('Key')[0].innerHTML
        onSetImageUri && onSetImageUri(`//${host}/${key}`)
        onUpdateStatus && onUpdateStatus('success')
      } else onUpdateStatus && onUpdateStatus('error')
    }

    xhr.upload.addEventListener('load', () => {}, false)

    xhr.open('POST', url)

    const body = new FormData()

    Object.keys(data).forEach((key) => body.append(key, data[key]))
    body.append('file', file)

    xhr.send(body)
  }

  retryRef && retryRef(upload)

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
