import { State } from '@/presentation/pages/login/login'
import { createContext } from 'react'

type TypeFormContext = {
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
}

export default createContext(null as TypeFormContext)
