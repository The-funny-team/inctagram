import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Button, Card, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './SignInForm.module.scss'

import { ControlledInput } from './ControlledInput'
import { useSignInForm } from './useSignInForm'
export const SignInForm = () => {
  const { control } = useSignInForm()

  const classNames = {
    forgotLink: s.forgotLink,
    form: s.form,
    formInput: s.formInput,
    formTitle: s.formTitle,
    providers: s.providers,
    root: s.root,
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.formTitle} variant={'h1'}>
        Sign In
      </Typography>
      <div className={classNames.providers}>
        <GoogleIcon />
        <GithubIcon />
      </div>
      <form className={classNames.form}>
        <ControlledInput
          className={classNames.formInput}
          control={control}
          label={'Email'}
          name={'email'}
          type={'text'}
        />
        <ControlledInput
          className={classNames.formInput}
          control={control}
          label={'Password'}
          name={'password'}
          type={'password'}
        />
        <Typography
          as={Link}
          className={classNames.forgotLink}
          href={ROUTES_URL.FORGOT_PASSWORD}
          variant={'regularText14'}
        >
          Forgot Password?
        </Typography>
        <Button>Sign In</Button>
      </form>
      <Typography variant={'regularText16'}>Don’t have an account?</Typography>
      <Typography as={Link} href={ROUTES_URL.SIGN_UP} variant={'h3'}>
        Sign Up
      </Typography>
    </Card>
  )
}
