import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks'
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from '@/widgets/ForgotPassword/services/forgotPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useForgotPassword = () => {
  const {
    text: {
      pages: { forgotPassword: transcription },
    },
  } = useTranslation()
  const [captcha, setCaptcha] = useState<null | string>(null)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const {
    control,
    formState: { isValid },
    getValues,
    handleSubmit,
    setError,
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordSchema(transcription)),
  })

  const isDisabled = !(isValid && captcha)

  return {
    captcha,
    control,
    getValues,
    handleSubmit,
    isDisabled,
    isOpenModal,
    setCaptcha,
    setError,
    setIsOpenModal,
    transcription,
  }
}
