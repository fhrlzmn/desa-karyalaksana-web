'use client'

import { useMobileContext } from '@/context/MobileContext'
import MobileMenu from './MobileMenu'
import MobileMenuIcon from './MobileMenuIcon'
import { Variant } from './MobileMenuIcon'

export default function ToggleMobileMenu() {
  const [isOpen, setIsOpen] = useMobileContext()

  return (
    <div className='flex justify-center items-center'>
      <button onClick={() => setIsOpen(true)}>
        <MobileMenuIcon
          variant={Variant.Open}
          className={'fill-black w-6 h-6'}
        />
      </button>

      {isOpen ? <MobileMenu /> : <></>}
    </div>
  )
}
