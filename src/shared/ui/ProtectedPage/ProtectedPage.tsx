import { PropsWithChildren } from 'react'

import { useMeQuery } from '@/shared/api/profileApi'
import { ROUTES_URL } from '@/shared/const'
import { Loader } from '@/shared/ui'
import { useRouter } from 'next/router'

export const ProtectedPage = ({ children }: PropsWithChildren<{}>) => {
  const { data, isLoading } = useMeQuery()
  const router = useRouter()

  if (isLoading) {
    return <Loader />
  }

  if (data == null) {
    void router.push(ROUTES_URL.SIGN_IN)

    return null
  }

  return <>{children}</>
}
