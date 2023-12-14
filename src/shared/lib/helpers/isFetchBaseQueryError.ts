type ErrorData = {
  data: {
    message: { field: string; message: string }[] | string
    path: string
    timestamp: string
  }
  status: number
}

export const isFetchBaseQueryError = (error: unknown): error is ErrorData => {
  return typeof error === 'object' && error !== null && 'data' in error
}
