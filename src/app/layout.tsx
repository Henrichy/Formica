import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Load Clash Display from local OTF files
const clashDisplay = localFont({
  src: [
    {
      path: '../../public/assets/fonts/ClashDisplay-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashDisplay-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Fortica',
  description: 'Trade crypto with clarity and confidence',
  icons: {
    icon: '/assets/images/Vector1.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} font-clash`}>{children}</body>
    </html>
  )
}