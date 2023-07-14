import Image from 'next/image'
import sawahImage from '@/assets/sawah.jpg'

export default function Hero() {
  return (
    <div className='relative lg:h-screen w-full'>
      <div className='absolute w-full h-full z-10 text-white'>
        <div className='absolute p-6 lg:p-12 left-0 lg:top-0 text-5xl lg:text-8xl font-semibold'>
          <h1>
            Desa <br /> Karyalaksana
          </h1>
        </div>
        <div className='absolute w-full p-6 lg:p-12 bottom-0 flex flex-col lg:flex-row justify-between lg:items-center text-xs lg:text-base'>
          <p>Kab. Bandung &bull; Prov. Jawa Barat &bull; Indonesia</p>
          <p>40384</p>
        </div>
      </div>

      <Image
        src={sawahImage}
        alt='Sawah'
        quality={100}
        className='w-full h-full object-cover -z-10 contrast-100'
      />
    </div>
  )
}
