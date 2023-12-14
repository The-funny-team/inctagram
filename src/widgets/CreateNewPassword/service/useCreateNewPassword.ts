import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateNewPasswordSchemaType, createNewPasswordSchema } from './createNewPasswordSchema'

export const useCreateNewPassword = () => {
  const { text } = useTranslation()
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
  } = useForm<CreateNewPasswordSchemaType>({
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(createNewPasswordSchema(text.validation)),
  })

  const isDisabled = !isValid

  return {
    control,
    handleSubmit,
    isDisabled,
    setError,
    text: text.pages.createNewPassword,
  }
}
