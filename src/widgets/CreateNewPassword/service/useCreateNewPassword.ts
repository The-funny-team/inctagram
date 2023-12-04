import { useForm } from 'react-hook-form'

export type CreateNewPasswordProps = {
  password: string
  password2: string
}

export const useCreateNewPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<CreateNewPasswordProps>({
    mode: 'onTouched',
  })

  return {
    control,
    errors,
    handleSubmit,
    watch,
  }
}
