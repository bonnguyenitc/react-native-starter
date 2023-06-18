import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { LoginPayload } from '../../types'

const schema = yup.object({
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
})

export const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  return {
    control,
    handleSubmit,
    errors,
  }
}
