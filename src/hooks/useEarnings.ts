import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../swapp/utils'
import useSwapp from './useSwapp'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const swapp = useSwapp()
  const masterChefContract = getMasterChefContract(swapp)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, swapp])

  useEffect(() => {
    if (account && masterChefContract && swapp) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, swapp])

  return balance
}

export default useEarnings
