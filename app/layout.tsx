import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppShell from '@/components/AppShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tornado Consulting Group (TCG) - Robotic Solutions for Business Growth',
  description: 'Partner with Tornado Consulting Group (TCG) to unlock the potential of robotics. We help businesses deploy robotic solutions for productivity, automation, and innovation.',
  keywords: 'robotics solutions, industrial automation, robotic arms, warehouse robotics, robotics integration, digital transformation, TCG',
  authors: [{ name: 'Tornado Consulting Group' }],
  metadataBase: new URL('https://tornadoai.com.au'),
  openGraph: {
    title: 'Tornado Consulting Group (TCG) - Robotic Solutions for Business Growth',
    description: 'Partner with Tornado Consulting Group (TCG) to unlock the potential of robotics. We help businesses deploy robotic solutions for productivity, automation, and innovation.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
