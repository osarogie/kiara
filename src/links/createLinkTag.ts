import { createElement, ReactNode } from 'react'
import Link from 'next/link'
import { TcLinkProps } from './TcLinkProps'

type UrlFunc<T> = (obj: T) => string

export const createLinkTag = <T>(
  href: string,
  urlFunc: UrlFunc<T>
): ReactNode => {
  return function TcLink(props: TcLinkProps<T>): JSX.Element {
    const as = urlFunc(props.object)

    return createElement(Link, { href, as }, createElement('a', { ...props }))
  }
}
