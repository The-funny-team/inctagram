import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from 'locales'
import { z } from 'zod'

const PASSWORD_PATTERN =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~])[A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]+$/
const USERNAME_PATTERN = /^[0-9A-Za-z_-]+$/

const signUpSchema = (text: LocaleType) => {
  return z
    .object({
      agree: z.boolean().default(false),
      confirmPassword: z.string().trim(),
      email: z.string().email({ message: text.errors.signUp.emailVerification }).trim(),
      password: z
        .string()
        .min(6, text.errors.signUp.minPasswordLength)
        .max(20, text.errors.signUp.maxPasswordLength20)
        .regex(PASSWORD_PATTERN, text.errors.signUp.passwordVerification)
        .trim(),
      username: z
        .string()
        .min(6, text.errors.signUp.minPasswordLength)
        .max(30, text.errors.signUp.maxPasswordLength30)
        .regex(USERNAME_PATTERN, text.errors.signUp.usernameVerification)
        .trim(),
    })
    .refine(({ confirmPassword, password }) => password === confirmPassword, {
      message: text.errors.signUp.passwordMismatch,
      path: ['confirmPassword'],
    })
    .refine(({ agree }) => agree, {
      path: ['agree'],
    })
}

export type SignUpSchemaType = z.infer<ReturnType<typeof signUpSchema>>

export const useSignUp = (text: LocaleType) =>
  useForm<SignUpSchemaType>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      username: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signUpSchema(text)),
  })
