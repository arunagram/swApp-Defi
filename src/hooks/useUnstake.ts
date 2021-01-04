import { useCallback } from 'react'

import useSwapp from './useSwapp'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../swapp/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const swapp = useSwapp()
  const masterChefContract = getMasterChefContract(swapp)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, swapp],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
