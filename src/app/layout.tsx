import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find a pet',
  description: 'Sign up now and get instant updates when pets in your local area become available for adoption',
  applicationName: "Find a pet",
  alternates: {
    canonical: `/`,
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
