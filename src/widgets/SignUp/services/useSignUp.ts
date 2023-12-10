import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks'
import { SignUpSchemaType, signUpSchema } from '@/widgets/SignUp/services/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useSignUp = () => {
  const { text } = useTranslation()

  const {
    control,
    formState: { isSubmitting, isValid },
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

  const isDisabled = !isValid || isSubmitting

  return {
    control,
    getValues,
    handleSubmit,
    isDisabled,
    reset,
    setError,
    text,
  }
}
