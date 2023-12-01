import { z } from 'zod'

import { LocaleType } from '../../../../locales'

export const forgotPasswordSchema = (transcription: LocaleType['pages']['forgotPassword']) =>
  z.object({
    email: z.string().email(transcription.emailValidationError),
  })

export type ForgotPasswordFormValues = z.infer<ReturnType<typeof forgotPasswordSchema>>
