import {useCallback} from 'react'

import useSwapp from './useSwapp'
import {useWallet} from 'use-wallet'

import {leave, getXSwappStakingContract} from '../swapp/utils'

const useLeave = () => {
  const {account} = useWallet()
  const swapp = useSwapp()

  const handle = useCallback(
    async (amount: string) => {
      const txHash = await leave(
        getXSwappStakingContract(swapp),
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, swapp],
  )

  return {onLeave: handle}
}

export default useLeave
