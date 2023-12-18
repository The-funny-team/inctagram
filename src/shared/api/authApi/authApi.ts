import { baseApi } from '@/shared/api/baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createNewPassword: builder.mutation<void, NewPasswordRequestType>({
      query: body => {
        return {
          body,
          method: 'POST',
          url: '/auth/new-password',
        }
      },
    }),
    emailConfirmation: builder.mutation<void, { code: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration-confirmation',
      }),
    }),
    emailResending: builder.mutation<void, { code: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration-email-resending',
      }),
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/password-recovery',
      }),
    }),
    signIn: builder.mutation<SignInResponseType, SignInRequestType>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/login',
      }),
    }),
    signUp: builder.mutation<SignUpResponse, CreateUserDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration',
      }),
    }),
  }),
})

export const {
  useCreateNewPasswordMutation,
  useEmailConfirmationMutation,
  useEmailResendingMutation,
  usePasswordRecoveryMutation,
  useSignInMutation,
  useSignUpMutation,
} = authApi

export type CreateUserDto = {
  email: string
  password: string
  passwordConfirm: string
  username: string
}

export type SignUpResponse = {
  createdAt: string
  email: string
  id: string
  updatedAt: string
  username: string
}

export type SignInRequestType = Pick<CreateUserDto, 'email' | 'password'>

export type SignInResponseType = { accessToken: string }

export type NewPasswordRequestType = {
  password: string
  passwordConfirmation: string
  recoveryCode: string
}
