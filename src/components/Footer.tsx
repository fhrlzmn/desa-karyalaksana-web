import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer id='history' className='w-full px-12 py-32 bg-gray-300'>
      <div className='flex w-full justify-around'>
        <div className='lg:w-1/3'>
          <div className='flex gap-2 items-center'>
            <Image
              src={logo}
              alt={'Logo Desa Karyalaksana'}
              width={45}
              height={45}
            />
            <div>
              <h1 className='text-3xl font-semibold'>Karyalaksana</h1>
              <p>Kab. Bandung</p>
            </div>
          </div>
          <p className='text-sm mt-4'>
            Jln. Pangguh No. 2205 Desa Karyalaksana
          </p>
        </div>
        <div className='lg:w-1/4'>
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
        <div className='lg:w-1/4'>
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
        <div className='lg:w-1/4'>
          <h2 className='text-lg'>Hak Cipta</h2>
          <p className='text-sm leading-loose mt-4'>
            © 2023 Karyalaksana. Hak Cipta Dilindungi. Dilarang menyalin atau
            mendistribusikan konten tanpa izin tertulis.
          </p>
        </div>
      </div>
    </footer>
  )
}
