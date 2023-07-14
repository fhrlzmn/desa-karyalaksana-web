import Image from 'next/image'
import sawahImage from '@/assets/sawah.jpg'

export default function Hero() {
  return (
    <div className='relative top-0 lg:h-screen h-96 w-full'>
      <div className='absolute px-12 flex flex-col justify-between w-full h-full text-white'>
        <div className='container py-8 text-4xl lg:text-8xl font-semibold'>
          <h1 className='hidden lg:block'>
            Desa <br /> Karyalaksana
          </h1>
        </div>
        <div className='container py-8 bottom-0 flex flex-col lg:flex-row justify-between lg:items-center text-xs lg:text-base'>
          <p>
            Kec. Ibun &bull; Kab. Bandung &bull; Prov. Jawa Barat &bull;
            Indonesia
          </p>
          <p>40384</p>
        </div>
      </div>

      <Image
        src={sawahImage}
        alt='Sawah'
        quality={100}
        priority={true}
        className='absolute w-full h-full object-cover -z-10 contrast-75'
      />
    </div>
  )
}
