import React from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'

import { useTranslation } from '@/shared/lib/hooks/useTranslation'
import { Button, Card, Input, Typography } from '@/shared/ui'
import {
  FormCreateNewPasswordProps,
  useCreateNewPassword,
} from '@/widgets/CreateNewPassword/service/useCreateNewPassword'
import clsx from 'clsx'

import styles from './CreateNewPassword.module.scss'

type Props = {
  className?: string
}

export const CreateNewPassword: React.FC<Props> = ({ className, ...restProps }) => {
  const { text } = useTranslation()

  const { control, errors, handleSubmit, isDisabled } = useCreateNewPassword()

  const submitFormHandler: SubmitHandler<FormCreateNewPasswordProps> = data => {
    console.log(data)
  }

  return (
    <Card className={clsx(styles.createNewPassword, className)} {...restProps}>
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
          name={'confirmPassword'}
          render={({ field }) => (
            <Input
              type={'password'}
              {...field}
              error={errors?.confirmPassword?.message}
              label={text.pages.createNewPassword.newPasswordLabelConfirmation}
            />
          )}
        />
        <Typography className={styles.prompt} variant={'regularText14'}>
          {text.pages.createNewPassword.prompt}
        </Typography>
        <Button disabled={isDisabled} type={'submit'}>
          {text.pages.createNewPassword.createNewPasswordBtn}
        </Button>
      </form>
    </Card>
  )
}
