import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  swapp: {
    3: '0x3Fe00f043B2B3aD0D0E80C98144794D59a8B8873',
  },
  masterChef: {
    3: '0xd374Db199f83fA90B7589b5cCd83D1Dd92041Fc1',
  },
  weth: {
    3: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSwapp: {
    3: '0xB55DDdeEda2F35E9EA89B6B6D3869b1a85353b5C'
  }
}



export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      3: '0xA469F2A2CbEf2aD4C021A04Ff3ab91c963aebFD0',
    },
    tokenAddresses: {
      3: '0x3Fe00f043B2B3aD0D0E80C98144794D59a8B8873',
    },
    name: 'Swapp Party!',
    symbol: 'SWAPP-ETH SLP',
    tokenSymbol: 'SWAPP',
    icon: '💎',
  },
   {
    pid: 1,
    lpAddresses: {
      3: '0xA469F2A2CbEf2aD4C021A04Ff3ab91c963aebFD0',
    },
    tokenAddresses: {
      3: '0x3Fe00f043B2B3aD0D0E80C98144794D59a8B8873',
    },
    name: 'Swapp Hard 5SWAPPERBLOCK!',
    symbol: 'SWAPP-ETH SLP',
    tokenSymbol: 'SWAPP',
    icon: '💎',
  }
  
]
