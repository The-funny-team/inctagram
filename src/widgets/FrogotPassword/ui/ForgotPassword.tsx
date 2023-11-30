import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { RecaptchaIcon } from '@/shared/assets'
import { Button, Card, Checkbox, Typography } from '@/shared/ui'
import { ForgotPasswordFormValues, forgotPasswordSchema } from '@/widgets/FrogotPassword/services'
import { ControlledInput } from '@/widgets/FrogotPassword/ui/ControlledInput'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './ForgotPassword.module.scss'

type Props = {
  onSubmit: (data: ForgotPasswordFormValues) => void
}

export const ForgotPassword = ({ onSubmit }: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const { control, handleSubmit, watch } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(forgotPasswordSchema),
  })

  const isDisabled = !(watch('email') && isChecked)

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          autoComplete={'darova'}
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'Example@mail.com'}
          type={'text'}
        />
        <Typography className={s.caption} variant={'regularText14'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button disabled={isDisabled} type={'submit'}>
          Send Link
        </Button>
      </form>
      <Button className={s.link} fullWidth variant={'link'}>
        Back to Sign In
      </Button>
      <div className={s.notARobot}>
        <Checkbox
          checked={isChecked}
          label={`I'm not a robot`}
          onCheckedChange={(value: boolean) => setIsChecked(value)}
        />
        <span className={s.recaptcha}>
          <RecaptchaIcon height={47} width={54} />
        </span>
      </div>
    </Card>
  )
}
