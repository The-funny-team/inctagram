import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const forgotPasswordSchema = (transcription: LocaleType['pages']['forgotPassword']) =>
  z.object({
    email: z.string().email(transcription.emailValidationError),
  })

export type ForgotPasswordFormValues = z.infer<ReturnType<typeof forgotPasswordSchema>>
