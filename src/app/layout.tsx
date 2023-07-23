import './globals.css'
import { Questrial, Montserrat } from 'next/font/google'
import { Metadata } from 'next'
import { MobileProvider } from '@/context/MobileContext'
import Footer from '@/components/Footer'

const questrial = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-questrial',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Desa Karyalaksana',
    default: 'Desa Karyalaksana',
  },
  description: 'Website resmi Desa Karyalaksana',
  keywords: ['desa', 'karyalaksana', 'ibun', 'kabupaten', 'bandung'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${questrial.variable} ${montserrat.variable}`}>
      <MobileProvider>
        <body className='font-montserrat'>
          <div className='relative lg:static lg:flex lg:flex-col w-full'>
            {children}
          </div>
        </body>
      </MobileProvider>
    </html>
  )
}
