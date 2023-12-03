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
  const [isChecked, setIsChecked] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const { control, getValues, handleSubmit, setError, watch } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
    resolver: zodResolver(forgotPasswordSchema(transcription)),
  })

  const isDisabled = !(watch('email') && isChecked)

  return {
    control,
    getValues,
    handleSubmit,
    isChecked,
    isDisabled,
    isOpenModal,
    isSuccess,
    setError,
    setIsChecked,
    setIsOpenModal,
    setIsSuccess,
    transcription,
  }
}
