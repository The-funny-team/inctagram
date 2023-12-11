export const isFetchError = (error: unknown): error is { error: string; status: 'FETCH_ERROR' } => {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    error.status === 'FETCH_ERROR' &&
    'error' in error &&
    typeof error.error === 'string'
  )
}
