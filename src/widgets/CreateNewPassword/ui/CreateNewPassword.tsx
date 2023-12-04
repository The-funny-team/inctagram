import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks/useTranslation'
import { Button, Card, Input, Typography } from '@/shared/ui'
import {
  CreateNewPasswordProps,
  useCreateNewPassword,
} from '@/widgets/CreateNewPassword/service/useCreateNewPassword'
import clsx from 'clsx'

import styles from './CreateNewPassword.module.scss'

type Props = {
  className?: string
}

export const CreateNewPassword: React.FC<Props> = ({ className, ...props }) => {
  const { text } = useTranslation()

  const { control, errors, handleSubmit, watch } = useCreateNewPassword()

  const password = watch('password', '')

  const submitFormHandler: SubmitHandler<CreateNewPasswordProps> = data => {
    console.log(data)
  }

  return (
    <Card className={clsx(styles.createNewPassword, className)} {...props}>
      <Typography as={'h1'} className={styles.title} variant={'h1'}>
        {text.pages.createNewPassword.title}
      </Typography>
      <form className={styles.createNewPasswordForm} onSubmit={handleSubmit(submitFormHandler)}>
        <Controller
          control={control}
          name={'password'}
          render={({ field }) => (
            <Input
              type={'password'}
              {...field}
              label={text.pages.createNewPassword.newPasswordLabel}
            />
          )}
        />
        <Controller
          control={control}
          name={'password2'}
          render={({ field }) => (
            <Input
              type={'password'}
              {...field}
              error={errors?.password2?.message}
              label={text.pages.createNewPassword.newPasswordLabelConfirmation}
            />
          )}
          rules={{
            required: 'Password is required',
            validate: value =>
              (value === password && password.length > 6) ||
              text.pages.createNewPassword.passwordError,
          }}
        />
        <Typography className={styles.prompt} variant={'regularText14'}>
          {text.pages.createNewPassword.prompt}
        </Typography>
        <Button>{text.pages.createNewPassword.createNewPasswordBtn}</Button>
      </form>
    </Card>
  )
}
