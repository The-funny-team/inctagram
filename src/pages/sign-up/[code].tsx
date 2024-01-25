import { useEffect, useState } from 'react'

import { useEmailConfirmationMutation, useEmailResendingMutation } from '@/shared/api/authApi'
import { getRootLayout } from '@/shared/layouts'
import { Loader } from '@/shared/ui'
import { ConfirmedEmail } from '@/widgets/ConfirmedEmail'
import { ExpiredLink } from '@/widgets/ExpiredLink'
import { useRouter } from 'next/router'

const EmailVerificationPage = () => {
  const router = useRouter()

  const { code } = router.query
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [confirmation, { isError, isLoading, isSuccess }] = useEmailConfirmationMutation()

  const [emailResending] = useEmailResendingMutation()

  useEffect(() => {
    if (code && typeof code === 'string') {
      confirmation({ code })
    }
  }, [code, confirmation])

  const sendEmail = () => {
    if (code && typeof code === 'string') {
      emailResending({ code })
        .unwrap()
        .then(() => setIsOpenModal(true))
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <ExpiredLink
        isOpenModal={isOpenModal}
        resendEmailHandler={sendEmail}
        setIsOpenModal={setIsOpenModal}
      />
    )
  }

  if (isSuccess) {
    return <ConfirmedEmail />
  }

  return null
}

EmailVerificationPage.getLayout = getRootLayout
export default EmailVerificationPage
