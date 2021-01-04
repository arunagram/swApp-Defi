import { useCallback } from 'react'

import useSwapp from './useSwapp'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../swapp/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const swapp = useSwapp()
  const masterChefContract = getMasterChefContract(swapp)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, swapp])

  return { onReward: handleReward }
}

export default useReward
