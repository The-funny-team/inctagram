import { useForm } from 'react-hook-form'

import { SignUpSchemaType, signUpSchema } from '@/widgets/SignUp/services/signUpSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@locales/en'

export const useSignUp = (text: LocaleType) =>
  useForm<SignUpSchemaType>({
    defaultValues: {
      agree: false,
      confirmPassword: '',
      email: '',
      password: '',
      username: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema(text)),
  })
