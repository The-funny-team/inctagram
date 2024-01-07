import { baseApi } from '@/shared/api/baseApi'
import { loadFromLocalStorage } from '@/shared/lib/helpers'

const profileApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    me: builder.query<User, void>({
      query: () => ({
        headers: { Authorization: `Bearer ${loadFromLocalStorage('accessToken', '')}` },
        method: 'GET',
        url: '/user/me',
      }),
    }),
  }),
})

export const { useMeQuery } = profileApi

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
