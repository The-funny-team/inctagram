import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetchBase } from '../base-api-with-refresh'

export const baseApi = createApi({
  baseQuery: customFetchBase,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Me'],
})
