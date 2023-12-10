import { baseApi } from '@/shared/api/baseApi'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<SignUpResponse, CreateUserDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration',
      }),
    }),
  }),
})

export const { useSignUpMutation } = authApi

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
