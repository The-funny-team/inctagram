import { ErrorOption } from 'react-hook-form'
import { toast } from 'react-toastify'

import { isFetchBaseQueryError } from './isFetchBaseQueryError'
import { isFetchError } from './isFetchError'

export const onRequestErrorHandler = <T>(
  error: unknown,
  setError: (name: T, error: ErrorOption) => void
) => {
  if (isFetchBaseQueryError(error)) {
    if (Array.isArray(error.data.message)) {
      error.data.message.forEach(item =>
        setError(item.field as T, { message: item.message, type: 'validationError' })
      )
    } else {
      toast.error(error.data.message as string)
    }
  }
  if (isFetchError(error)) {
    toast.error(error.error as string)
  }
}
