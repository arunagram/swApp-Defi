import { useCallback } from 'react'

import useSwapp from './useSwapp'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../swapp/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const swapp = useSwapp()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(swapp),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, swapp],
  )

  return { onStake: handleStake }
}

export default useStake
