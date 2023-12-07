import React from 'react'
import { Controller, SubmitHandler } from 'react-hook-form'

import { Button, Card, Input, Typography } from '@/shared/ui'
import {
  CreateNewPasswordSchemaType,
  useCreateNewPassword,
} from '@/widgets/CreateNewPassword/service'
import clsx from 'clsx'

import styles from './CreateNewPassword.module.scss'

type Props = {
  className?: string
}

export const CreateNewPassword: React.FC<Props> = ({ className, ...restProps }) => {
  const { control, handleSubmit, isDisabled, text } = useCreateNewPassword()

  const submitFormHandler: SubmitHandler<CreateNewPasswordSchemaType> = data => {
    console.log(data)
  }

  return (
    <Card className={clsx(styles.createNewPassword, className)} {...restProps}>
      <Typography as={'h1'} className={styles.title} variant={'h1'}>
        {text.title}
      </Typography>
      <form className={styles.createNewPasswordForm} onSubmit={handleSubmit(submitFormHandler)}>
        <Controller
          control={control}
          name={'password'}
          render={({ field, fieldState: { error } }) => (
            <Input
              type={'password'}
              {...field}
              error={error?.message}
              label={text.newPasswordLabel}
            />
          )}
        />
        <Controller
          control={control}
          name={'confirmPassword'}
          render={({ field, fieldState: { error } }) => (
            <Input
              type={'password'}
              {...field}
              error={error?.message}
              label={text.newPasswordLabelConfirmation}
            />
          )}
        />
        <Typography className={styles.prompt} variant={'regularText14'}>
          {text.prompt}
        </Typography>
        <Button disabled={isDisabled} type={'submit'}>
          {text.createNewPasswordBtn}
        </Button>
      </form>
    </Card>
  )
}
