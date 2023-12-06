import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@locales/en'

import { SignInFormValuesType, signInSchema } from './signInSchema'

type Props = LocaleType['errors']['signInform']

export const useSignIn = (t: Props) =>
  useForm<SignInFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema(t)),
  })
