import { baseApi } from '@/shared/api/baseApi'
import { ACCESS_TOKEN } from '@/shared/const'
import { loadFromLocalStorage } from '@/shared/lib/helpers'

export const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        headers: { Authorization: `Bearer ${loadFromLocalStorage(ACCESS_TOKEN, '')}` },
        method: 'DELETE',
        url: '/user/avatar',
      }),
    }),
    me: builder.query<MeResponse, void>({
      providesTags: ['Me'],
      query: () => ({
        headers: { Authorization: `Bearer ${loadFromLocalStorage(ACCESS_TOKEN, '')}` },
        method: 'GET',
        url: '/user/me',
      }),
    }),
    updateAvatar: builder.mutation<void, AvatarDto>({
      invalidatesTags: ['Me'],
      query: ({ file }) => {
        const formData = new FormData()

        formData.append('file', file)

        return {
          body: formData,
          headers: { Authorization: `Bearer ${loadFromLocalStorage(ACCESS_TOKEN, '')}` },
          method: 'POST',
          url: '/user/avatar',
        }
      },
    }),
    updateUser: builder.mutation<User, UpdateUserDto>({
      invalidatesTags: ['Me'],
      query: body => {
        return {
          body,
          headers: { Authorization: `Bearer ${loadFromLocalStorage(ACCESS_TOKEN, '')}` },
          method: 'PUT',
          url: '/user',
        }
      },
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useMeQuery,
  useUpdateAvatarMutation,
  useUpdateUserMutation,
} = profileApi

export type User = {
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

type UpdateUserDto = {
  aboutMe?: string | undefined
  city?: string | undefined
  country?: string | undefined
  dateOfBirth?: Date | undefined
  firstName: string
  lastName: string
  username: string
}

type AvatarDto = {
  file: File
}

type MeResponse = User | null
