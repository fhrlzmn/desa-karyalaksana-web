import Link from 'next/link'
import Links from './Links'
import ToggleMobileMenu from './ToggleMobileMenu'

export enum Variant {
  'Mobile',
  'Desktop',
}

interface Props {
  variant: Variant
}

export default function Navbar({ variant }: Props) {
  const isVariantMobile = variant === Variant.Mobile

  return (
    <nav className='container flex justify-between items-center'>
      <Link href={'/'} className='text-2xl lg:text-lg text-black font-semibold'>
        Desa Karyalaksana
      </Link>
      {isVariantMobile ? <ToggleMobileMenu /> : <Links />}
    </nav>
  )
}
