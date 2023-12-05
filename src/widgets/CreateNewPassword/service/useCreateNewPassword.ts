import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks'
import { zodResolver } from '@hookform/resolvers/zod'

import { createNewPasswordSchema } from './createNewPasswordSchema'

export type FormCreateNewPasswordProps = {
  confirmPassword: string
  password: string
}

export const useCreateNewPassword = () => {
  const {
    text: {
      pages: { createNewPassword: transcription },
    },
  } = useTranslation()
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormCreateNewPasswordProps>({
    defaultValues: {
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(createNewPasswordSchema(transcription)),
  })

  const isDisabled = !(watch('confirmPassword') && watch('password'))

  return {
    control,
    errors,
    handleSubmit,
    isDisabled,
    watch,
  }
}
