import { useState } from 'react'

import { usePasswordRecoveryResendingMutation } from '@/shared/api/authApi'
import { getRootLayout } from '@/shared/ui'
import { CreateNewPassword } from '@/widgets/CreateNewPassword'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { useRouter } from 'next/router'

const CreateNewPasswordPage = () => {
  const [recoveryError, setRecoveryError] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [passwordRecoveryResending] = usePasswordRecoveryResendingMutation()
  const router = useRouter()
  const code = router.query.code as string

  const sendEmail = () => {
    alert('send request')
  }

  return (
    <>
      {!recoveryError ? (
        <CreateNewPassword code={code} setRecoveryErrorHandler={setRecoveryError} />
      ) : (
        <ExpiredLink
          isOpenModal={isOpenModal}
          resendEmailHandler={sendEmail}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  )
}

CreateNewPasswordPage.getLayout = getRootLayout
export default CreateNewPasswordPage
