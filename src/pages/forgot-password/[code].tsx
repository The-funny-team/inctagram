import { useState } from 'react'
import { toast } from 'react-toastify'

import { usePasswordRecoveryResendingMutation } from '@/shared/api/authApi'
import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
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
    passwordRecoveryResending({ code })
      .unwrap()
      .then(() => setIsOpenModal(true))
      .catch(err => toast.error(JSON.stringify(err)))
  }

  return (
    <>
      <HeadMeta title={'Forgot Password'} />
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
