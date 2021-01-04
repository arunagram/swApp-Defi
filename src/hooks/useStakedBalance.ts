import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../swapp/utils'
import useSwapp from './useSwapp'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const swapp = useSwapp()
  const masterChefContract = getMasterChefContract(swapp)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, swapp])

  useEffect(() => {
    if (account && swapp) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, swapp])

  return balance
}

export default useStakedBalance
