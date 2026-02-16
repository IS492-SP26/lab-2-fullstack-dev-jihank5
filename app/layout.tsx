import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'

import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'Jihan Karim | Web Developer & Student',
  description:
    'Personal portfolio of Jihan Karim - Web Developer and Student creating beautiful, functional websites.',
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${_inter.variable} ${_sora.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
