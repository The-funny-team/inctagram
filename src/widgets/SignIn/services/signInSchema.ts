import { PASSWORD_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const signInSchema = (t: LocaleType['validation']) => {
  return z.object({
    email: z.string().email({ message: t.emailVerification }).trim(),
    password: z
      .string()
      .min(6, t.minLength6)
      .max(20, t.maxLength20)
      .regex(PASSWORD_PATTERN, t.passwordVerification)
      .trim(),
  })
}

export type SignInFormValuesType = z.infer<ReturnType<typeof signInSchema>>
