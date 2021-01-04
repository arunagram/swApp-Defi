import {useCallback} from 'react'

import useSwapp from './useSwapp'
import {useWallet} from 'use-wallet'
import {provider} from 'web3-core'
import {
  approve,
  getSwappContract,
  getXSwappStakingContract
} from '../swapp/utils'

const useApproveStaking = () => {
  const {account}: { account: string; ethereum: provider } = useWallet()
  const swapp = useSwapp()
  const lpContract = getSwappContract(swapp)
  const contract = getXSwappStakingContract(swapp)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, contract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, contract])

  return {onApprove: handleApprove}
}

export default useApproveStaking
