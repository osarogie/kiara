import ApiClient from './ApiClient'

export function ImageUploader() {
  function getSignedUrl(file, callback) {
    const client = new ApiClient()
    const params = {
      objectName: file.name,
      contentType: file.type
    }
    fetch()
    client
      .get('/_/s3', { params })
      .then(data => {
        callback(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <ReactS3Uploader
      className={uploaderClassName}
      getSignedUrl={getSignedUrl}
      accept="image/*"
      onProgress={onProgress}
      onError={onError}
      onFinish={onFinish}
      uploadRequestHeaders={{
        'x-amz-acl': 'public-read'
      }}
      contentDisposition="auto"
    />
  )
}
