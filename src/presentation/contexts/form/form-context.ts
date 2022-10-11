import { ErrorState, State } from '@/presentation/pages/login/login'
import { createContext } from 'react'

type TypeFormContext = {
  state: State
  errorState: ErrorState
}

export default createContext(null as TypeFormContext)
