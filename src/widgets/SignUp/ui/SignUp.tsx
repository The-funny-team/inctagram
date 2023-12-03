import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Card, Typography } from '@/shared/ui'
import { ControlledCheckbox } from '@/widgets/SignUp/ui/ControlledCheckbox'
import { ControlledInput } from '@/widgets/SignUp/ui/ControlledInput'
import { Trans } from '@/widgets/SignUp/ui/Trans'
import { SignUpSchemaType, useSignUp } from '@/widgets/SignUp/ui/useSignUp'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './SignUp.module.scss'

export const SignUp = () => {
  const { text } = useTranslation()
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useSignUp(text)
  const maxLengthCharacters = 50
  const classNames = {
    form: clsx(s.form),
    formCheckbox: clsx(s.formCheckbox),
    formInput(error?: string) {
      return clsx(
        s.formInput,
        error && error.length > maxLengthCharacters && s.formInputWithErrorDouble,
        error && error.length <= maxLengthCharacters && s.formInputWithErrorSingle
      )
    },
    otherRegistration: clsx(s.otherRegistration),
    question: clsx(s.question),
    root: clsx(s.root),
    title: clsx(s.title),
  }
  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data)
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.title} variant={'h1'}>
        {text.pages.signUp.formTitle}
      </Typography>{' '}
      <div className={classNames.otherRegistration}>
        <Link href={'https://accounts.google.com/o/oauth2/v2/auth'} target={'_blank'}>
          <GoogleIcon />
        </Link>
        <Link href={'https://github.com/login/oauth/authorize'} target={'_blank'}>
          <GithubIcon />
        </Link>
      </div>
      <form className={classNames.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          className={classNames.formInput(errors.username?.message)}
          control={control}
          label={text.pages.signUp.username}
          name={'username'}
          type={'text'}
        />
        <ControlledInput
          className={classNames.formInput(errors.email?.message)}
          control={control}
          label={text.pages.signUp.email}
          name={'email'}
          type={'text'}
        />
        <ControlledInput
          className={classNames.formInput(errors.password?.message)}
          control={control}
          label={text.pages.signUp.password}
          name={'password'}
          type={'password'}
        />
        <ControlledInput
          className={classNames.formInput(errors.confirmPassword?.message)}
          control={control}
          label={text.pages.signUp.confirmPassword}
          name={'confirmPassword'}
          type={'password'}
        />
        <div className={classNames.formCheckbox}>
          <ControlledCheckbox control={control} name={'agree'} />
          <Typography as={'span'} variant={'smallText'}>
            <Trans
              tags={{
                1: () => (
                  <Typography as={Link} href={ROUTES_URL.TERMS_OF_SERVICE} variant={'smallLink'}>
                    {text.pages.signUp.agreement.privacy}
                  </Typography>
                ),
                2: () => (
                  <Typography as={Link} href={ROUTES_URL.PRIVACY_POLICY} variant={'smallLink'}>
                    {text.pages.signUp.agreement.terms}
                  </Typography>
                ),
              }}
              text={text.pages.signUp.agreement.description}
            />
          </Typography>
        </div>
        <Button disabled={!isValid} type={'submit'}>
          {text.pages.signUp.signUpBtn}
        </Button>
      </form>
      <Typography className={classNames.question} variant={'regularText16'}>
        {text.pages.signUp.questionAboutAccount}
      </Typography>
      <Button as={Link} href={ROUTES_URL.SIGN_IN} variant={'link'}>
        {text.pages.signUp.signUpLink}
      </Button>
    </Card>
  )
}
