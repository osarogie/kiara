import { LinkProps } from 'next/link'

export interface TcLinkProps<T> extends LinkProps {
  for: T
}
