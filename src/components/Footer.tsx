import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/logo.png'
import FacebookIcon from './Footer/FacebookIcon'
import InstagramIcon from './Footer/InstagramIcon'
import MessageIcon from './Footer/MessageIcon'

export default function Footer() {
  return (
    <footer id='history' className='w-full px-12 py-32 bg-gray-300'>
      <div className='grid grid-cols-3 gap-6 w-full justify-center'>
        <div className='w-full col-span-3'>
          <div className='flex gap-6 items-center'>
            <Image src={logo} alt={'Logo Desa Karyalaksana'} className='w-16' />
            <div>
              <h1 className='text-3xl lg:text-5xl font-semibold'>
                Karyalaksana
              </h1>
              <p>Kab. Bandung</p>
            </div>
          </div>
          <p className='text-sm mt-4'>
            Jln. Pangguh No. 2205 Desa Karyalaksana
          </p>
          <div className='mt-4 flex gap-3'>
            <Link href='#'>
              <FacebookIcon className='fill-slate-700 hover:fill-green-500' />
            </Link>
            <Link href='#'>
              <InstagramIcon className='fill-slate-700 hover:fill-green-500' />
            </Link>
            <Link href='#'>
              <MessageIcon className='fill-slate-700 hover:fill-green-500' />
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <h2 className='text-2xl'>Instansi</h2>
          <ul className='mt-4 text-sm leading-loose list-inside list-disc'>
            <li>
              <Link href={'#profile'}>Profil Desa</Link>
            </li>
            <li>
              <Link href={'#history'}>Sejarah</Link>
            </li>
            <li>
              <Link href={'#information'}>Informasi</Link>
            </li>
          </ul>
        </div>
        <div className='w-full'>
          <h2 className='text-2xl'>Referensi</h2>
          <ul className='mt-4 text-sm leading-loose list-inside list-disc'>
            <li>
              <Link href={'http://karyalaksana.desa.id'}>Website Resmi</Link>
            </li>
            <li>
              <Link
                href={
                  'https://id.wikipedia.org/wiki/Karyalaksana,_Ibun,_Bandung'
                }
              >
                Wikipedia Desa
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-full'>
          <h2 className='text-lg'>Hak Cipta</h2>
          <p className='text-sm leading-loose mt-4'>
            © 2023 Fahrul Zaman. Hak Cipta Dilindungi. Dilarang menyalin atau
            mendistribusikan konten tanpa izin tertulis.
          </p>
        </div>
      </div>
    </footer>
  )
}
