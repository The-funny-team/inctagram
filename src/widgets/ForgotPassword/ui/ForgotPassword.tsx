import { RecaptchaIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Button, Card, Checkbox, Modal, Typography } from '@/shared/ui'
import { ForgotPasswordFormValues, useForgotPassword } from '@/widgets/ForgotPassword/services'
import { ControlledInput } from '@/widgets/ForgotPassword/ui/ControlledInput'
import Link from 'next/link'

import s from './ForgotPassword.module.scss'

export const ForgotPassword = () => {
  const {
    control,
    getValues,
    handleSubmit,
    isChecked,
    isDisabled,
    isOpenModal,
    isSuccess,
    setError,
    setIsChecked,
    setIsOpenModal,
    setIsSuccess,
    transcription,
  } = useForgotPassword()

  const submitHandler = (data: ForgotPasswordFormValues) => {
    new Promise((res, rej) => {
      setTimeout(() => {
        res(data)
      }, 2000)
    })
      .then(data => {
        console.log(data)
        setIsSuccess(true)
        setIsOpenModal(true)
      })
      .catch(() => {
        setError('email', { message: `User with this email doesn't exist`, type: 'custom' })
      })
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {transcription.title}
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <ControlledInput
          control={control}
          label={transcription.inputLabel}
          name={'email'}
          placeholder={'Example@mail.com'}
          type={'text'}
        />
        <Typography className={s.caption} variant={'regularText14'}>
          {transcription.caption}
        </Typography>
        {isSuccess && (
          <Typography className={s.captionAfterSubmit} variant={'regularText14'}>
            {transcription.captionAfterSubmit}
          </Typography>
        )}
        <Button className={s.sendLink} disabled={isDisabled} type={'submit'}>
          {isSuccess ? transcription.resendLink : transcription.sendLinkBtn}
        </Button>
      </form>
      <Button as={Link} className={s.link} fullWidth href={ROUTES_URL.SIGN_IN} variant={'link'}>
        {transcription.signInBtn}
      </Button>
      {!isSuccess && (
        <div className={s.notARobot}>
          <Checkbox
            checked={isChecked}
            label={transcription.recaptcha}
            onCheckedChange={(value: boolean) => setIsChecked(value)}
          />
          <span className={s.recaptcha}>
            <RecaptchaIcon height={47} width={54} />
          </span>
        </div>
      )}
      <Modal isOpen={isOpenModal} onIsOpenChange={setIsOpenModal} title={transcription.modal.title}>
        <Typography variant={'regularText16'}>
          {transcription.modal.getBody(getValues('email'))}
        </Typography>
        <div className={s.modalBtnGroup}>
          <Button fullWidth={false} onClick={() => setIsOpenModal(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </Card>
  )
}
