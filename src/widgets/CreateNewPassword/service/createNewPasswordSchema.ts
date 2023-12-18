import { PASSWORD_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const createNewPasswordSchema = (transcription: LocaleType['validation']) =>
  z
    .object({
      password: z
        .string()
        .min(6, { message: transcription.minLength6 })
        .max(20, { message: transcription.maxLength20 })
        .regex(PASSWORD_PATTERN, transcription.passwordVerification)
        .trim(),
      passwordConfirmation: z.string().trim(),
    })
    .refine(({ password, passwordConfirmation }) => password === passwordConfirmation, {
      message: transcription.passwordMismatch,
      path: ['passwordConfirmation'],
    })

export type CreateNewPasswordSchemaType = z.infer<ReturnType<typeof createNewPasswordSchema>>
