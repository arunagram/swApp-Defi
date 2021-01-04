import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Swapp } from '../../swapp'

export interface SwappContext {
  swapp?: typeof Swapp
}

export const Context = createContext<SwappContext>({
  swapp: undefined,
})

declare global {
  interface Window {
    swappsauce: any
  }
}

const SwappProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [swapp, setSwapp] = useState<any>()

  // @ts-ignore
  window.swapp = swapp
  // @ts-ignore


  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const swappLib = new Swapp(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSwapp(swappLib)
      window.swappsauce = swappLib
    }
  }, [ethereum])

  return <Context.Provider value={{ swapp }}>{children}</Context.Provider>
}

export default SwappProvider
