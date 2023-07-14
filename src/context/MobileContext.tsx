'use client'

import { createContext, useContext, useState } from 'react'

export const MobileContext = createContext<Array<any>>([])

export function useMobileContext() {
  return useContext(MobileContext)
}

export function MobileProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <MobileContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </MobileContext.Provider>
  )
}
