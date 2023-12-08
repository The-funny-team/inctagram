import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@locales/en'

import { SignInFormValuesType, signInSchema } from './signInSchema'

export const useSignIn = (t: LocaleType['validation']) =>
  useForm<SignInFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema(t)),
  })
