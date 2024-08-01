import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Logo } from 'components/Logo'

const FeedLatest = dynamic(
  () => import('../app/feed/FeedLatest').then((m) => m.FeedLatest),
  {
    ssr: false
  }
)

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div className="flex fixed h-full w-full flex-col items-center justify-center">
          <Logo size={100} />
        </div>
      }
    >
      <FeedLatest />
    </Suspense>
  )
}
