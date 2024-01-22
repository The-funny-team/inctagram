import { ReactElement } from 'react'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COUNTRIES_URL = 'https://countriesnow.space/api/v0.1/countries'

type GetCitiesResponseType = {
  data: string[]
  error: boolean
  msg: string
}

type GetCitiesRequestType = {
  country: string
}

export const citiesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: COUNTRIES_URL,
  }),
  endpoints: build => ({
    getCities: build.mutation<
      { label: ReactElement | string; value: string }[],
      GetCitiesRequestType
    >({
      query: body => ({
        body,
        method: 'POST',
        url: '/cities',
      }),
      transformResponse: (result: GetCitiesResponseType) => {
        if (result.error) {
          return []
        }

        return result.data
          .map(city => ({
            label: city,
            value: city,
          }))
          .sort((a, b) => {
            return a.label > b.label ? 1 : -1
          })
      },
    }),
  }),
  reducerPath: 'countriesApi',
})

export const { useGetCitiesMutation } = citiesApi
