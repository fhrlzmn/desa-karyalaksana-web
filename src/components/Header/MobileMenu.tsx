import Link from 'next/link'
import { links } from './Links'
import { useMobileContext } from '@/context/MobileContext'
import MobileMenuIcon from './MobileMenuIcon'
import { Variant } from './MobileMenuIcon'

export default function MobileMenu() {
  const [_isOpen, setIsOpen] = useMobileContext()

  return (
    <div className='fixed flex justify-center items-center bg-gray-800 bg-opacity-80 top-0 left-0 h-screen w-full z-50'>
      <div className='flex flex-col justify-center bg-white p-6 w-full m-12 gap-8'>
        <div className='flex justify-between'>
          <h3 className='text-base font-medium text-gray-600'>
            <Link href='/' onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
          </h3>
          <button onClick={() => setIsOpen(false)}>
            <MobileMenuIcon
              variant={Variant.Close}
              className='fill-black h-6 w-6'
            />
          </button>
        </div>

        <ul className='flex flex-col gap-8'>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className='text-base font-medium text-gray-600 hover:text-green-500'
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
