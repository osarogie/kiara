import React from 'react'
import 'app/globals.css'
import { PageContainer } from './PageContainer'

export const metadata = {
  title: 'TheCommunity',
  description: "What's your story?"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  )
}
