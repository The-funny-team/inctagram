import { useForm } from 'react-hook-form'

import { PASSWORD_PATTERN } from '@/shared/const'
import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

const signInSchema = (text: LocaleType) => {
  return z.object({
    email: z.string().email({ message: text.errors.signInform.emailVerification }).trim(),
    password: z
      .string()
      .min(6, text.errors.signInform.minPasswordLength)
      .max(20, text.errors.signInform.maxPasswordLength)
      .regex(PASSWORD_PATTERN, text.errors.signInform.passwordVerification)
      .trim(),
  })
}

export type SignInFormValuesType = z.infer<ReturnType<typeof signInSchema>>

export const useSignIn = (text: LocaleType) =>
  useForm<SignInFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema(text)),
  })
