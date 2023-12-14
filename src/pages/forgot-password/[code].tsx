import { useEffect, useState } from 'react'

import { getRootLayout } from '@/shared/ui'
import { CreateNewPassword } from '@/widgets/CreateNewPassword'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { useParams } from 'next/navigation'

const CreateNewPasswordPage = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const params = useParams()
  const code = params?.code as string

  const requestCodeFromApi = () => {
    return '90c87f21-5085-4ce7-be3b-493c8c58053d' // temporary test code
  }

  useEffect(() => {
    const codeFromApi = requestCodeFromApi()

    if (code && code === codeFromApi) {
      setIsSuccess(true)
    }
  }, [code])
  const sendEmail = () => {
    alert('send request')
  }

  return (
    <>
      {isSuccess ? (
        <CreateNewPassword code={code} />
      ) : (
        <ExpiredLink resendEmailHandler={sendEmail} />
      )}
    </>
  )
}

CreateNewPasswordPage.getLayout = getRootLayout
export default CreateNewPasswordPage
