import { baseApi } from '@/shared/api/baseApi'
import { profileApi } from '@/shared/api/profileApi'

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
    emailConfirmation: builder.mutation<void, ConfirmationCodeDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration-confirmation',
      }),
    }),
    emailResending: builder.mutation<void, ConfirmationCodeDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/registration-email-resending',
      }),
    }),
    loginByGoogle: builder.query<SignInResponseType, ConfirmationCodeDto>({
      query: ({ code }) => ({
        method: 'GET',
        params: { code },
        url: 'auth/google',
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          profileApi.util.updateQueryData('me', undefined, () => {
            return null
          })
        )

        localStorage.removeItem('accessToken')

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      query: () => ({
        method: 'POST',
        url: '/auth/logout',
      }),
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/password-recovery',
      }),
    }),
    passwordRecoveryResending: builder.mutation<void, ConfirmationCodeDto>({
      query: body => ({
        body,
        method: 'POST',
        url: '/auth/password-recovery-resending',
      }),
    }),
    signIn: builder.mutation<SignInResponseType, SignInRequestType>({
      invalidatesTags: ['Me'],
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
  useLoginByGoogleQuery,
  useLogoutMutation,
  usePasswordRecoveryMutation,
  usePasswordRecoveryResendingMutation,
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
  aboutMe: null | string
  avatarUrl: null | string
  city: null | string
  country: null | string
  createdAt: string
  dateOfBirth: null | string
  email: string
  firstName: null | string
  id: string
  lastName: null | string
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

type ConfirmationCodeDto = {
  code: string
}
