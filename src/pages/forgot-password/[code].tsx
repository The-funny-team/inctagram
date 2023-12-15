import { useEffect, useState } from 'react'

import { getRootLayout } from '@/shared/ui'
import { CreateNewPassword } from '@/widgets/CreateNewPassword'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { useRouter } from 'next/router'

const CreateNewPasswordPage = () => {
  const [recoveryError, setRecoveryError] = useState(false)
  const router = useRouter()
  const code = router.query.code as string
  const sendEmail = () => {
    alert('send request')
  }

  return (
    <>
      {!recoveryError ? (
        <CreateNewPassword code={code} submitFormHandler={setRecoveryError} />
      ) : (
        <ExpiredLink resendEmailHandler={sendEmail} />
      )}
    </>
  )
}

CreateNewPasswordPage.getLayout = getRootLayout
export default CreateNewPasswordPage
