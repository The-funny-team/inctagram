import { PASSWORD_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const createNewPasswordSchema = (transcription: LocaleType['validation']) =>
  z
    .object({
      confirmPassword: z.string().trim(),
      password: z
        .string()
        .min(6, { message: transcription.minLength6 })
        .max(20, { message: transcription.maxLength20 })
        .regex(PASSWORD_PATTERN, transcription.passwordVerification)
        .trim(),
    })
    .refine(({ confirmPassword, password }) => password === confirmPassword, {
      message: transcription.passwordMismatch,
      path: ['confirmPassword'],
    })

export type CreateNewPasswordSchemaType = z.infer<ReturnType<typeof createNewPasswordSchema>>
