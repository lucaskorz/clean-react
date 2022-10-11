import React, { useState } from 'react'
import Styles from './login-styles.scss'
import {
  Footer,
  LoginHeader,
  Input,
  FormStatus
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

export type State = {
  isLoading: boolean
}

export type ErrorState = {
  email: string
  password: string
  main: string
}

const Login: React.FC = () => {
  const [state] = useState<State>({
    isLoading: false
  })

  const [errorState] = useState<ErrorState>({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, errorState } }>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"/>
          <button
            data-testid="submit"
            className={Styles.submit}
            type="submit"
            disabled
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
        <Footer />
      </Context.Provider>
    </div>
  )
}

export default Login
