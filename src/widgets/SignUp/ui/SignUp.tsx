import { useForm } from 'react-hook-form'

import { GithubIcon, GoogleIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Button, Card, Typography } from '@/shared/ui'
import { ControlledCheckbox } from '@/widgets/SignUp/ui/ControlledCheckbox'
import { ControlledInput } from '@/widgets/SignUp/ui/ControlledInput'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './SignUp.module.scss'

export const SignUp = () => {
  const { control } = useForm()
  const classNames = {
    form: clsx(s.form),
    formCheckbox: clsx(s.formCheckbox),
    formInput: clsx(s.formInput),
    otherRegistration: clsx(s.otherRegistration),
    question: clsx(s.question),
    root: clsx(s.root),
    signInLink: clsx(s.signInLink),
    title: clsx(s.title),
  }

  return (
    <Card className={classNames.root}>
      <Typography as={'h1'} className={classNames.title} variant={'h1'}>
        Sign Up
      </Typography>{' '}
      <div className={classNames.otherRegistration}>
        <Link href={'https://accounts.google.com/o/oauth2/v2/auth'} target={'_blank'}>
          <GoogleIcon />
        </Link>
        <Link href={'https://github.com/login/oauth/authorize'} target={'_blank'}>
          <GithubIcon />
        </Link>
      </div>
      <form className={classNames.form}>
        <ControlledInput
          className={classNames.formInput}
          control={control}
          label={'Username'}
          name={'username'}
          type={'text'}
        ></ControlledInput>
        <ControlledInput
          className={classNames.formInput}
          control={control}
          label={'Email'}
          name={'email'}
          type={'text'}
        ></ControlledInput>
        <ControlledInput
          className={classNames.formInput}
          control={control}
          label={'password'}
          name={'Password'}
          type={'password'}
        ></ControlledInput>
        <ControlledInput
          className={classNames.formInput}
          control={control}
          label={'Password confirmation'}
          name={'confirmPassword'}
          type={'password'}
        ></ControlledInput>
        <div className={classNames.formCheckbox}>
          <ControlledCheckbox control={control} name={'agree'}></ControlledCheckbox>
          <Typography as={'span'} variant={'smallText'}>
            I agree to the{' '}
            <Typography as={Link} href={ROUTES_URL.TERMS_OF_SERVICE} variant={'smallLink'}>
              Terms of Service
            </Typography>{' '}
            and{' '}
            <Typography as={Link} href={ROUTES_URL.PRIVACY_POLICY} variant={'smallLink'}>
              Privacy Policy
            </Typography>{' '}
          </Typography>
        </div>
        <Button type={'submit'}>Sign Up</Button>
      </form>
      <Typography className={classNames.question} variant={'regularText16'}>
        Do you have an account?
      </Typography>
      <Button
        as={Link}
        className={classNames.signInLink}
        href={ROUTES_URL.SIGN_IN}
        variant={'link'}
      >
        Sign In
      </Button>
    </Card>
  )
}
