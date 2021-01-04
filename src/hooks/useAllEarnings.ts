import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../swapp/utils'
import useSwapp from './useSwapp'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const swapp = useSwapp()
  const farms = getFarms(swapp)
  const masterChefContract = getMasterChefContract(swapp)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, swapp])

  useEffect(() => {
    if (account && masterChefContract && swapp) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, swapp])

  return balances
}

export default useAllEarnings
