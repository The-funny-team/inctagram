import { useForm } from 'react-hook-form'
import { registerNewUserUsingPOST } from '@/shared/api/generated'
import ROUTES_URL from '@/shared/routes'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

type FormType = {
  email: string
  password: string
}

export function useSignUpForm() {
  const router = useRouter()

  const { handleSubmit, register } = useForm<FormType>({})

  const signUpData = useMutation({
    mutationFn: registerNewUserUsingPOST,
    onSuccess() {
      router.push(ROUTES_URL.USER_PROFILE)
    },
  })

  const errorMessage = signUpData.error ? 'Sign up error' : undefined

  return {
    errorMessage: errorMessage,
    handleSubmit: handleSubmit(data => signUpData.mutate(data)),
    isLoading: signUpData.isPending,
    register,
  }
}
