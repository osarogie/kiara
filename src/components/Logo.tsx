import Image from 'next/image'
import Link from 'next/link'

type Props = {
  size?: number
  href?: string | null
  className?: string
}

export function Logo({ size = 30, href = null, className }: Props) {
  if (!href) {
    return (
      <Image
        src="/images/logo3.png"
        height={size}
        width={size}
        className={className}
        // resizeMode="contain"
      />
    )
  }

  return (
    <Link href={href} passHref>
      <a href={href}>
        <Image
          src="/images/logo3.png"
          height={size}
          width={size}
          className={className}
          // resizeMode="contain"
        />
      </a>
    </Link>
  )
}
