import { PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const signUpSchema = (text: LocaleType) => {
  return z
    .object({
      agree: z.boolean(),
      confirmPassword: z.string().trim(),
      email: z.string().email({ message: text.errors.signUp.emailVerification }).trim(),
      password: z
        .string()
        .min(6, text.errors.signUp.minLength6)
        .max(20, text.errors.signUp.maxLength20)
        .regex(PASSWORD_PATTERN, text.errors.signUp.passwordVerification)
        .trim(),
      username: z
        .string()
        .min(6, text.errors.signUp.minLength6)
        .max(30, text.errors.signUp.maxLength30)
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
