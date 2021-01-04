import { useContext } from 'react'
import { Context } from '../contexts/SwappProvider'

const useSwapp = () => {
  const { swapp } = useContext(Context)
  return swapp
}

export default useSwapp
