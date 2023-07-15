import Image from 'next/image'
import kantorDesaImage from '@/assets/kantor-desa-karyalaksana.jpeg'
import Card from './Profile/Card'

export default function Profile() {
  return (
    <div id='profile' className='min-h-screen w-full flex items-center px-12'>
      <div className='container py-28 lg:py-32 flex flex-col lg:flex-row justify-between gap-8'>
        <div className='relative -z-10 lg:static flex flex-col gap-6 w-full lg:w-1/2'>
          <h1 className='text-3xl lg:text-6xl font-semibold'>Profil Desa</h1>
          <div className='relative -z-10 h-64 lg:h-auto w-full lg:w-1/2'>
            <Image
              src={kantorDesaImage}
              alt='Kantor Desa'
              fill={true}
              className='object-cover'
            />
          </div>
          <p className='text-base'>
            Desa Karyalaksana terletak di Kecamatan Ibun, Kabupaten Bandung,
            dengan luas wilayah 110Ha dan berada di dataran dengan ketinggian
            rata-rata 700m di atas permukaan laut.
          </p>
          <p className='text-base'>
            Desa Karyalaksana memiliki makna bahwa "karya" mengacu pada
            pekerjaan atau perjuangan, sementara "laksana" merujuk pada
            pencapaian atau pemenuhan. Diharapkan bahwa nama desa ini menjadi
            panduan bagi masyarakat untuk terus mengabdikan diri dalam bekerja
            dan berjuang, serta berharap agar usaha mereka terus berhasil dan
            diwujudkan.
          </p>
          <div className='flex flex-col lg:flex-row justify-around gap-6 mt-2'>
            <Card title='110ha' desc='Luas Wilayah' />
            <Card title='700m' desc='Ketinggian Permukaan' />
            <Card title='6.761' desc='Jumlah Penduduk' />
          </div>
        </div>
        <div className='relative hidden lg:block -z-10 h-80 lg:h-auto w-full lg:w-1/2'>
          <Image
            src={kantorDesaImage}
            alt='Kantor Desa'
            fill={true}
            className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}
