import { PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const signUpSchema = (text: LocaleType) => {
  return z
    .object({
      agree: z.boolean(),
      email: z.string().email({ message: text.validation.emailVerification }).trim(),
      password: z
        .string()
        .min(6, text.validation.minLength6)
        .max(20, text.validation.maxLength20)
        .regex(PASSWORD_PATTERN, text.validation.passwordVerification)
        .trim(),
      passwordConfirm: z.string().trim(),
      username: z
        .string()
        .min(6, text.validation.minLength6)
        .max(30, text.validation.maxLength30)
        .regex(USERNAME_PATTERN, text.validation.usernameVerification)
        .trim(),
    })
    .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
      message: text.validation.passwordMismatch,
      path: ['passwordConfirm'],
    })
    .refine(({ agree }) => agree, {
      path: ['agree'],
    })
}

export type SignUpSchemaType = z.infer<ReturnType<typeof signUpSchema>>
