import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Card, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './SignIn.module.scss'

import { ControlledInput } from './ControlledInput'
import { SignInFormValuesType, useSignIn } from './useSignIn'
export const SignIn = () => {
  const { text } = useTranslation()

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useSignIn(text)

  const classNames = {
    forgotLink: s.forgotLink,
    form: s.form,
    formInput(error?: string) {
      return clsx(s.formInput, error && s.formInputWithError)
    },
    formTitle: s.formTitle,
    providers: s.providers,
    questionText: s.questionText,
    root: s.root,
    signUpLink: s.signUpLink,
  }

  const onFormSubmit = (data: SignInFormValuesType) => {
    console.log(data)
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.formTitle} variant={'h1'}>
        {text.pages.signIn.formTitle}
      </Typography>
      <div className={classNames.providers}>
        <Link href={'https://accounts.google.com/o/oauth2/v2/auth'} target={'_blank'}>
          <GoogleIcon />
        </Link>
        <Link href={'https://github.com/login/oauth/authorize'} target={'_blank'}>
          <GithubIcon />
        </Link>
      </div>
      <form className={classNames.form} onSubmit={handleSubmit(onFormSubmit)}>
        <ControlledInput
          className={classNames.formInput(errors.email?.message)}
          control={control}
          label={text.pages.signIn.emailLabel}
          name={'email'}
          type={'text'}
        />
        <ControlledInput
          autoComplete={'off'}
          className={classNames.formInput(errors.password?.message)}
          control={control}
          label={text.pages.signIn.passwordLabel}
          name={'password'}
          type={'password'}
        />
        <Typography
          as={Link}
          className={classNames.forgotLink}
          href={ROUTES_URL.FORGOT_PASSWORD}
          variant={'regularText14'}
        >
          {text.pages.signIn.forgotPasswordLink}
        </Typography>
        <Button disabled={!isValid} type={'submit'}>
          {text.pages.signIn.signInBtn}
        </Button>
      </form>
      <Typography className={classNames.questionText} variant={'regularText16'}>
        {text.pages.signIn.questionAboutAccount}
      </Typography>
      <Button
        as={Link}
        className={classNames.signUpLink}
        href={ROUTES_URL.SIGN_UP}
        variant={'link'}
      >
        {text.pages.signIn.signUpLink}
      </Button>
    </Card>
  )
}
