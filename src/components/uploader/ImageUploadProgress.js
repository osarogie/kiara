import { ActivityIndicator, View } from 'react-native-web'
import './image_upload_progress.scss'

export function ImageUploadProgress({
  source,
  uploaderId,
  onRemoveImage,
  status,
  progress = '100%',
  style,
  retry
}) {
  let _className = 'iup-container'
  if (status) _className = `${_className} ${status}`

  function renderImage() {
    if (source)
      return <img src={source} style={style} className="discussion_photo" />
  }

  function renderOptions() {
    if (!status) return null
    return (
      <div

      // className="iup-overlay"
      >
        <div className="iup-controls">
          {status == 'uploading' && (
            <ActivityIndicator
              className="s__content__main iup-option"
              size={18}
            />
          )}
          {status == 'error' && (
            <span className="iup-option" onClick={retry}>
              Retry
            </span>
          )}
          <span className="iup-option" onClick={onRemoveImage}>
            Remove
          </span>
        </div>
      </div>
    )

    // if(status='error')
  }

  return (
    <>
      <div
        style={{ display: source ? 'block' : 'none', width: '100%', ...style }}
        className={_className}
      >
        {renderImage()}
      </div>
      {renderOptions()}
    </>
  )
}
