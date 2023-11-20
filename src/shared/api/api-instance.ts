import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export const apiInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return apiInstance({
    ...config,
  }).then(result => result.data)
}

export type BodyType<Data> = Data

export type ErrorType<Error> = AxiosError<Error>
