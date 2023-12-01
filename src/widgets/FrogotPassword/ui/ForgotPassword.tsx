import { RecaptchaIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Button, Card, Checkbox, Modal, Typography } from '@/shared/ui'
import { ForgotPasswordFormValues, useForgotPasswordForm } from '@/widgets/FrogotPassword/services'
import { ControlledInput } from '@/widgets/FrogotPassword/ui/ControlledInput'
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
    transcripton,
  } = useForgotPasswordForm()

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
        {transcripton.title}
      </Typography>
      <form onSubmit={handleSubmit(submitHandler)}>
        <ControlledInput
          control={control}
          label={transcripton.inputLabel}
          name={'email'}
          placeholder={'Example@mail.com'}
          type={'text'}
        />
        <Typography className={s.caption} variant={'regularText14'}>
          {transcripton.caption}
        </Typography>
        {isSuccess && (
          <Typography className={s.captionAfterSubmit} variant={'regularText14'}>
            {transcripton.captionAfterSubmit}
          </Typography>
        )}
        <Button className={s.sendLink} disabled={isDisabled} type={'submit'}>
          {isSuccess ? transcripton.resendLink : transcripton.sendLinkBtn}
        </Button>
      </form>
      <Button as={Link} className={s.link} fullWidth href={ROUTES_URL.SIGN_IN} variant={'link'}>
        {transcripton.signInBtn}
      </Button>
      {!isSuccess && (
        <div className={s.notARobot}>
          <Checkbox
            checked={isChecked}
            label={transcripton.recaptcha}
            onCheckedChange={(value: boolean) => setIsChecked(value)}
          />
          <span className={s.recaptcha}>
            <RecaptchaIcon height={47} width={54} />
          </span>
        </div>
      )}
      <Modal isOpen={isOpenModal} onIsOpenChange={setIsOpenModal} title={transcripton.modal.title}>
        <Typography variant={'regularText16'}>
          {transcripton.modal.getBody(getValues('email'))}
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
