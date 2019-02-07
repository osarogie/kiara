import { useState } from 'react'

export function ImageUploader({ data, url, host }) {
  const [uploading, setUploading] = useState(false)
  const [images, setImages] = useState([])

  function upload() {
    fetch(url, {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(images => {
        setUploading(false)
        setImages(images)
      })
  }
}
