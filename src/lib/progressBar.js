import NProgress from 'nprogress'

export function showProgress() {
  NProgress.start()
}

export function hideProgress() {
  NProgress.done()
}
