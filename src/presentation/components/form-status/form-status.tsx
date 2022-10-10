import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'

type Props = {
  message: string
}

const FormStatus: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>{props.message}</span>
    </div>
  )
}

export default FormStatus
