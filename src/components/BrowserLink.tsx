import React, {
  CSSProperties,
  MouseEventHandler,
  useCallback,
  useMemo
} from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { isSameOrigin } from 'utils'

type BrowserLinkProps = {
  className?: string
  style?: CSSProperties
  activeStyle?: CSSProperties
  href: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
  [x: string]: any
}

export function BrowserLink({
  className,
  style,
  activeStyle,
  href,
  onClick,
  ...props
}: BrowserLinkProps) {
  const router = useRouter()
  const go = useCallback(
    (e) => {
      e.preventDefault()

      if (!isSameOrigin(href)) return (location.href = href)

      Router.push(href).then(() => window.scrollTo(0, 0))
    },
    [href]
  )

  const isCurrent = router.asPath === href
  const mergedClassNames = useMemo(() => {
    let mergedClassNames = ''
    if (className) mergedClassNames = `${className}`
    if (isCurrent) mergedClassNames = `current ${mergedClassNames}`
    return mergedClassNames.trimRight()
  }, [className, isCurrent])

  const newStyle = useMemo(() => {
    if (!isCurrent) return style
    return { ...style, ...activeStyle }
  }, [style, activeStyle, isCurrent])

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        // href={href}
        className={mergedClassNames}
        onClick={onClick || go}
        {...props}
        style={newStyle}
      />
    </Link>
  )
}

export default BrowserLink
