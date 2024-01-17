import { PropsWithChildren, useEffect, useLayoutEffect } from 'react'

import { useLazyMeQuery, useMeQuery } from '@/shared/api/profileApi'
import { ROUTES_URL } from '@/shared/const'
import { PUBLIC_PAGES } from '@/shared/const/publicPages'
import { Loader } from '@/shared/ui'
import { useRouter } from 'next/router'

const publicRoutes = PUBLIC_PAGES.map(route => route.split('/')[1])

export const ProtectedPage = ({ children }: PropsWithChildren<{}>) => {
  const { data: profileInfo, isLoading } = useMeQuery()
  const router = useRouter()
  const currentPath = router.pathname.split('/')[1]
  const publicPath = publicRoutes.some(path => path === currentPath)

  useEffect(() => {
    if (!profileInfo && !isLoading && !publicPath) {
      void router.push(ROUTES_URL.SIGN_IN)
    }
  }, [profileInfo, router, isLoading, publicPath])

  return <>{isLoading ? <Loader /> : children}</>
}
