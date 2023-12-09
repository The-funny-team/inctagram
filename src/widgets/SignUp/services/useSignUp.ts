import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks'
import { SignUpSchemaType, signUpSchema } from '@/widgets/SignUp/services/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useSignUp = () => {
  const { text } = useTranslation()

  const {
    control,
    formState: { isValid },
    getValues,
    handleSubmit,
    reset,
    setError,
  } = useForm<SignUpSchemaType>({
    defaultValues: {
      agree: false,
      email: '',
      password: '',
      passwordConfirm: '',
      username: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema(text)),
  })

  return {
    control,
    getValues,
    handleSubmit,
    isValid,
    reset,
    setError,
    text,
  }
}
