import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import {
  Footer,
  LoginHeader,
  Input,
  FormStatus
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

export type State = {
  isLoading: boolean
  email: string
  password: string
  emailError: string
  passwordError: string
  mainError: string
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState<State>({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={ { state, setState } }>
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
            disabled={!!state.emailError || !!state.passwordError}
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
