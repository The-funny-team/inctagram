import { PropsWithChildren, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/application/store'
import { ROUTES_URL } from '@/shared/const'
import { useRouter } from 'next/router'

const ProtectedPage = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)

  useEffect(() => {
    if (!isAuth) {
      void router.push(ROUTES_URL.SIGN_IN)
    }
  }, [isAuth, router])

  return <>{children}</>
}
