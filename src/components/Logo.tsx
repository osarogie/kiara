import Image from 'next/image'
import Link from 'next/link'

type Props = {
  size?: number
  href?: string | null
  className?: string
  src?: string
}

export function Logo({
  size = 30,
  href = null,
  className,
  src = require('../assets/images/logo80.png')
}: Props) {
  if (!href) {
    return (
      <Image
        src={src}
        height={size}
        width={size}
        className={className}
        alt="logo"
        // resizeMode="contain"
      />
    )
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <a href={href}>
        <Image
          src={src}
          height={size}
          width={size}
          className={className}
          alt="logo"
          // resizeMode="contain"
        />
      </a>
    </Link>
  )
}
