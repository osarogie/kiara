function uploadImage(selector, preview, input_name) {
  let fileInput = $(elem)
  let form = $(fileInput.parents('form:first'))
  let submitButton = form.find('input[type="submit"]')
  let progressBar = $("<div class='bar'></div>")
  let barContainer = $("<div class='progress'></div>").append(progressBar)
  fileInput.after(barContainer)

  fileInput.fileupload({
    fileInput,
    url: form.data('url'),
    type: 'POST',
    autoUpload: true,
    formData: form.data('form-data'),
    paramName: 'file', //# S3 does not like nested name fields i.e. name="user[avatar_url]"
    dataType: 'XML', // # S3 returns XML if success_action_status is set to 201
    replaceFileInput: false,

    progressall(e, data) {
      let progress = parseInt((data.loaded / data.total) * 100, 10)
      progressBar.css('width', progress + '%')
    },
    start(e) {
      submitButton.prop('disabled', true)

      let reader = new FileReader()
      preview = $(preview)
      let file = this.files[0]

      reader.addEventListener(
        'load',
        () => preview.attr('src', reader.result).css('display', 'block'),
        false
      )

      reader.readAsDataURL(file)

      progressBar
        .css('background', '#000')
        .css('box-sizing', 'border-box')
        .css('padding', '0 8px')
        .css('display', 'block')
        .css('width', '0%')
        .text('Loading...')
    },
    done(e, data) {
      submitButton.prop('disabled', false)
      progressBar.text('Upload complete')

      // # extract key and generate URL from response
      let key = $(data.jqXHR.responseXML)
        .find('Key')
        .text()
      let url = '//' + form.data('host') + '/' + key
      // # create hidden field
      barContainer.css('display', 'none')
      let input = $('<input />', {
        type: 'hidden',
        name: input_name,
        value: url
      })
      form.append(input)
    },

    fail(e, data) {
      submitButton.prop('disabled', false)

      progressBar
        .css('background', 'red')
        .css('color', '#000')
        .text('Failed')
    }
  })
}
