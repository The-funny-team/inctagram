import { PASSWORD_PATTERN } from '@/shared/const'
import { LocaleType } from '@locales/en'
import { z } from 'zod'

export const createNewPasswordSchema = (transcription: LocaleType['pages']['createNewPassword']) =>
  z
    .object({
      confirmPassword: z
        .string()
        .min(6, { message: transcription.passwordMinLengthMessage })
        .max(20, { message: transcription.passwordMaxLengthMessage })
        .refine(value => PASSWORD_PATTERN.test(value), transcription.passwordVerification),
      password: z.string().min(6).max(20),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: transcription.passwordError,
        })
      }
    })

export type CreateNewPasswordSchemaType = z.infer<ReturnType<typeof createNewPasswordSchema>>
