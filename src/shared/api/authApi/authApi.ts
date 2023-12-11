import { baseApi } from '@/app/store'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
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
    confirmation: builder.mutation<void, { code: string }>({
      query: body => ({
        url: '/auth/registration-confirmation',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSignInMutation, useSignUpMutation, useConfirmationMutation } = authApi

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
