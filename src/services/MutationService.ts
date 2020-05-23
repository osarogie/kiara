import NProgress from 'nprogress'

interface Mutator {
  commit(data: any, config: any): void
}

type Callback = (...any) => {}
type Callbacks = {
  [x: string]: Callback
}

interface MutatorInstance {
  run(data: { [x: string]: Callback }): void
  callbacks(callbacks: Callbacks): MutatorInstance
  showProgress(): MutatorInstance
}

export function MutationService(mutator: Mutator): MutatorInstance {
  let callbacks: Callbacks = {}
  let showProgressBar = false
  let onError = () => {
    if (showProgressBar) NProgress.done()
  }

  let onCompleted = () => {
    if (showProgressBar) NProgress.done()
  }

  let instance: MutatorInstance = {
    run(data) {
      if (showProgressBar) NProgress.start()

      mutator.commit(data, { onError, onCompleted, ...callbacks })
    },

    showProgress() {
      showProgressBar = true
      return instance
    },

    callbacks(fList) {
      const {
        onCompleted: _onCompleted,
        onError: _onError,
        ..._callbacks
      } = fList
      callbacks = _callbacks

      onCompleted = () => {
        if (showProgressBar) NProgress.done()
        _onCompleted && _onCompleted()
      }

      onError = (...args) => {
        if (showProgressBar) NProgress.done()
        _onError && _onError(...args)
      }

      return instance
    }
  }

  return instance
}
