import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Adam Fine Art | Custom Murals & Canvas Art',
  description: 'Transforming spaces with custom murals, canvas paintings, and photo restorations. Professional fine art services in Bakersfield, CA.',
  keywords: ['murals', 'canvas art', 'fine art', 'custom paintings', 'Bakersfield', 'photo restoration'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text-primary font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
