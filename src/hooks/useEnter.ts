import {useCallback} from 'react'

import useSwapp from './useSwapp'
import {useWallet} from 'use-wallet'

import {enter, getXSwappStakingContract} from '../swapp/utils'

const useEnter = () => {
  const {account} = useWallet()
  const swapp = useSwapp()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await enter(
        getXSwappStakingContract(swapp),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, swapp],
  )

  return {onEnter: handle}
}

export default useEnter
