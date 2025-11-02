import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tornado Consulting Group (TCG) - AI Solutions for Business Growth',
  description: 'Partner with Tornado Consulting Group (TCG) to unlock AI potential. We help businesses adopt AI solutions for productivity, automation, and innovation.',
  keywords: 'AI consulting, machine learning, business automation, AI strategy, digital transformation, TCG',
  authors: [{ name: 'Tornado Consulting Group' }],
  metadataBase: new URL('https://tornadoai.com.au'),
  openGraph: {
    title: 'Tornado Consulting Group (TCG) - AI Solutions for Business Growth',
    description: 'Partner with Tornado Consulting Group (TCG) to unlock AI potential. We help businesses adopt AI solutions for productivity, automation, and innovation.',
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
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}
