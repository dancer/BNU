import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BNU Esports | Buckinghamshire New University',
  description: 'Official website of Buckinghamshire New University Esports. Join our competitive gaming community, participate in tournaments, and level up your skills.',
  keywords: ['BNU Esports', 'Buckinghamshire New University', 'esports', 'competitive gaming', 'university esports', 'gaming community', 'student gamers', 'esports tournaments', 'UK esports'],
  authors: [{ name: 'BNU Esports Team' }],
  creator: 'BNU Esports',
  publisher: 'Buckinghamshire New University',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://bnuesports.com',
    siteName: 'BNU Esports',
    title: 'BNU Esports | Competitive Gaming at Buckinghamshire New University',
    description: 'Join the BNU Esports community for competitive gaming, tournaments, and skill development at Buckinghamshire New University.',
    images: [
      {
        url: 'https://bnuesports.com/menu.png',
        width: 1200,
        height: 646,
        alt: 'BNU Esports Logo and Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@_BNUni',
    creator: '@dxd',
    title: 'BNU Esports | Competitive Gaming at Bucks New Uni',
    description: 'Discover BNU Esports: Tournaments, community events, and competitive gaming opportunities at Buckinghamshire New University.',
    images: ['https://bnuesports.com/menu.png'],
  },
  alternates: {
    canonical: 'https://bnuesports.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
};