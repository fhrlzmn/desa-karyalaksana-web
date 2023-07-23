import Navbar, { Variant } from '@/components/Header/Navbar'

export default function Header() {
  return (
    <header className='w-full px-12 py-6 bg-white fixed lg:sticky top-0 drop-shadow z-50'>
      <div className='hidden lg:block'>
        <Navbar variant={Variant.Desktop} />
      </div>
      <div className='block lg:hidden'>
        <Navbar variant={Variant.Mobile} />
      </div>
    </header>
  )
}
