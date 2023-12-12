import { Controller } from 'react-hook-form'

import { useSignInMutation } from '@/shared/api/authApi'
import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Card, Input, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Link from 'next/link'
import { onRequestErrorHandler } from 'src/shared/lib/helpers'

import s from './SignIn.module.scss'

import { SignInFormValuesType, useSignIn } from '../services'

export const SignIn = () => {
  const [signIn, { isLoading }] = useSignInMutation()
  const { router, text } = useTranslation()
  const t = text.pages.signIn
  const {
    control,
    formState: { isValid },
    handleSubmit,
    setError,
  } = useSignIn(text.validation)

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
    signIn(data)
      .unwrap()
      .then(data => router.push(ROUTES_URL.PROFILE))
      .catch(error => onRequestErrorHandler(error, setError))
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.formTitle} variant={'h1'}>
        {t.formTitle}
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
        <Controller
          control={control}
          name={'email'}
          render={({ field, fieldState: { error } }) => (
            <Input
              className={classNames.formInput(error?.message)}
              error={error?.message}
              label={t.emailLabel}
              placeholder={'Epam@epam.com'}
              type={'text'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'password'}
          render={({ field, fieldState: { error } }) => (
            <Input
              autoComplete={'off'}
              className={classNames.formInput(error?.message)}
              error={error?.message}
              label={t.passwordLabel}
              type={'password'}
              {...field}
            />
          )}
        />
        <Typography
          as={Link}
          className={classNames.forgotLink}
          href={ROUTES_URL.FORGOT_PASSWORD}
          variant={'regularText14'}
        >
          {t.forgotPasswordLink}
        </Typography>
        <Button disabled={!isValid || isLoading} type={'submit'}>
          {t.signInBtn}
        </Button>
      </form>
      <Typography className={classNames.questionText} variant={'regularText16'}>
        {t.questionAboutAccount}
      </Typography>
      <Button
        as={Link}
        className={classNames.signUpLink}
        href={ROUTES_URL.SIGN_UP}
        variant={'link'}
      >
        {t.signUpLink}
      </Button>
    </Card>
  )
}
