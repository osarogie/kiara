import { useEffect, useState } from 'react'

export function withMediaQuery(Component, query = `(min-width: 800px)`) {
  let mql

  return function withMediaQueryComponent() {
    const [match, setMatch] = useState(false)

    function mediaQueryChanged() {
      setMatch(mql.matches)
    }

    useEffect(
      () => {
        mql = window.matchMedia(query)
      },
      [query]
    )

    useEffect(() => {
      mql.addListener(mediaQueryChanged)
      return () => {
        mql.removeListener(mediaQueryChanged)
      }
    })

    return <Component mediaMatch={match} />
  }
}
