import { useRouter } from 'next/router'
import { useConfirmationMutation } from '@/shared/api/authApi'
import { useEffect, useState } from 'react'
import { ConfirmedEmail } from '@/widgets/ConfirmedEmail'
import { ExpiredLink } from '@/widgets/ExpiredLink'

export const EmailVerification = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const { code } = router.query

  const [confirmation] = useConfirmationMutation()
  useEffect(() => {
    if (code && typeof code === 'string') {
      confirmation({ code })
        .unwrap()
        .then(() => {
          setIsSuccess(true)
        })
        .catch(() => {
          setIsSuccess(false)
        })
    }
  }, [])

  const sendEmail = () => {
    console.log('send request')
  }

  return <>{isSuccess ? <ConfirmedEmail /> : <ExpiredLink sendEmailHandler={sendEmail} />}</>
}
