import { PropsWithChildren } from 'react'

import { useMeQuery } from '@/shared/api/profileApi'
import { ROUTES_URL } from '@/shared/const'
import { Loader } from '@/shared/ui'
import { useRouter } from 'next/router'

export const RedirectToProfilePage = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  const { data, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  if (data) {
    void router.push(ROUTES_URL.PROFILE)

    return null
  }

  return <>{children}</>
}
