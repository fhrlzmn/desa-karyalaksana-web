import './globals.css'
import { Questrial, Montserrat } from 'next/font/google'
import { Metadata } from 'next'

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
      <body className='font-montserrat'>
        <div className='w-full'>{children}</div>
      </body>
    </html>
  )
}
