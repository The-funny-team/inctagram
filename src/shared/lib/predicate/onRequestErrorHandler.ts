import { FieldError } from 'react-hook-form'

import { isFetchBaseQueryError } from './isFetchBaseQueryError'

const isFetchError = (error: unknown): error is { error: string; status: 'FETCH_ERROR' } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    error.status === 'FETCH_ERROR' &&
    'error' in error &&
    typeof error.error === 'string'
  )
}

export const onRequestErrorHandler = <T>(
  error: unknown,
  setError: (name: T, error: FieldError) => void
) => {
  if (isFetchBaseQueryError(error)) {
    if (Array.isArray(error.data.message)) {
      error.data.message.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    } else {
      alert(error.data.message)
    }
  }
  if (isFetchError(error)) {
    alert(error.error)
  }
}
