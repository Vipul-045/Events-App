import type { Metadata } from 'next'
import { Poppins, Poppins } from 'next/font/google'
import './globals.css'

const Poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
 })

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Platform for Event Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Poppins.variable}>{children}</body>
    </html>
  )
}
