import { PropsWithChildren } from 'react'

import { useMeQuery } from '@/shared/api/profileApi'
import { Loader } from '@/shared/ui'

export const PublicPage = ({ children }: PropsWithChildren<{}>) => {
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return <>{children}</>
}
