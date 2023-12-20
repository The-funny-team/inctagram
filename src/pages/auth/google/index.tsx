import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useLoginByGoogleQuery } from '@/shared/api/authApi'
import { ROUTES_URL } from '@/shared/const'
import { saveToLocalStorage } from '@/shared/lib/helpers'
import { useRouter } from 'next/router'

const GoogleAuthPage = () => {
  const router = useRouter()
  const { code } = router.query as { code: string }

  const { data, error, isLoading } = useLoginByGoogleQuery({ code: code }, { skip: !code })

  useEffect(() => {
    if (data?.accessToken) {
      saveToLocalStorage('accessToken', data.accessToken)
      router.push('/')
    }
    if (error) {
      toast.error('Authentication Error. Please try again later.')
      router.push(ROUTES_URL.SIGN_IN)
    }
  }, [data?.accessToken, error])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return null
}

export default GoogleAuthPage
