import { PASSWORD_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

type Props = LocaleType['errors']['signInform']

const signInSchema = (t: Props) => {
  return z.object({
    email: z.string().email({ message: t.emailVerification }).trim(),
    password: z
      .string()
      .min(6, t.minPasswordLength)
      .max(20, t.maxPasswordLength)
      .regex(PASSWORD_PATTERN, t.passwordVerification)
      .trim(),
  })
}

export type SignInFormValuesType = z.infer<ReturnType<typeof signInSchema>>
