import * as React from 'react'
import { createElement } from 'react'
import Link from 'next/link'
import { TcLinkProps } from './TcLinkProps'

type UrlFunc<T> = (obj: T) => string

type Container<Props> = React.ComponentType<
  Props & { componentRef?: (ref: any) => void }
>

export const createLinkTag = <T>(
  href: string,
  urlFunc: UrlFunc<T>,
  title?: string
): Container<TcLinkProps<T>> => {
  return function TcLink(props: TcLinkProps<T>): JSX.Element {
    const { for: object, ...forwardProps } = props
    const as = urlFunc(object)

    return createElement(
      Link,
      { href, as },
      createElement('a', { title, ...forwardProps })
    )
  }
}
