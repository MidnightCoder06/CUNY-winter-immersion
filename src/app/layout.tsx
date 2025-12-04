import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CUNY Winter Immersion',
  description: 'Welcome to the CUNY Winter Immersion project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

