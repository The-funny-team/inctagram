import { ErrorOption } from 'react-hook-form'

import { isFetchBaseQueryError } from './isFetchBaseQueryError'
import { isFetchError } from './isFetchError'

export const onRequestErrorHandler = <T>(
  error: unknown,
  setError: (name: T, error: ErrorOption) => void,
  fieldName?: T
) => {
  if (isFetchBaseQueryError(error)) {
    if (Array.isArray(error.data.message)) {
      error.data.message.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    } else {
      if (fieldName && error.status === 401) {
        setError(fieldName, { message: error.data.message, type: 'validationError' })
      } else {
        alert(error.data.message)
      }
    }
  }
  if (isFetchError(error)) {
    alert(error.error)
  }
}
