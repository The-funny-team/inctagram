import { ACCESS_TOKEN, BASE_API_URL } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: 'include',
})

export const customFetchBase: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  await mutex.waitForUnlock()
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            url: '/auth/refresh-token',
          },
          api,
          extraOptions
        )

        if (refreshResult.data) {
          const data = refreshResult.data as { accessToken: string }

          saveToLocalStorage(ACCESS_TOKEN, data.accessToken)
        }

        if (refreshResult.meta?.response?.status === 201) {
          result = await baseQuery(args, api, extraOptions)
        } else {
          const accessToken = localStorage.getItem(ACCESS_TOKEN)

          accessToken &&
            (await baseQuery(
              {
                method: 'POST',
                url: '/auth/logout',
              },
              api,
              extraOptions
            ))
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
