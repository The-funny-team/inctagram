import { ReactNode } from 'react'
import { queryClient } from '@/shared/api/query-client'
import { QueryClientProvider } from '@tanstack/react-query'

type WithReactQueryProviderPros = {
  children: ReactNode
}

export function WithReactQueryProvider({ children }: WithReactQueryProviderPros) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
