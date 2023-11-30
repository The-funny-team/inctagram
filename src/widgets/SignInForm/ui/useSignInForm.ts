import { useForm } from 'react-hook-form'

import { PASSWORD_PATTERN } from '@/shared/const'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'The email must match the format example@example.com' })
    .trim(),
  password: z
    .string()
    .min(6, 'Minimum number of characters 6')
    .max(20, 'Maximum number of characters 20')
    .regex(
      PASSWORD_PATTERN,
      'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~'
    )
    .trim(),
})

export type SignInFormValuesType = z.infer<typeof signInSchema>

export const useSignInForm = () =>
  useForm<SignInFormValuesType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
  })
