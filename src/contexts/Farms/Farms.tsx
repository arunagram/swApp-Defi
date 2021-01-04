import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useSwapp from '../../hooks/useSwapp'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../swapp/utils'
import { getFarms } from '../../swapp/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const swapp = useSwapp()
  const { account } = useWallet()

  const farms = getFarms(swapp)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
