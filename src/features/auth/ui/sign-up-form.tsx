import ROUTES_URL from '@/shared/routes'
import { UIButton } from '@/shared/ui/ui-button/ui-button'
import { UICheckBox } from '@/shared/ui/ui-check-box/ui-check-box'
import { UIFormTitle } from '@/shared/ui/ui-form-title/ui-form-title'
import { UIGithubIcon } from '@/shared/ui/ui-github-icon/ui-github-icon'
import { UIGoogleIcon } from '@/shared/ui/ui-google-icon/ui-google-icon'
import { UILink } from '@/shared/ui/ui-link/ui-link'
import { UITextInput } from '@/shared/ui/ui-text-input/ui-text-input'
import clsx from 'clsx'
import { useSignUpForm } from '../service/use-sign-up-form'
import styles from './sign-up-form.module.scss'

type SignUpFormProps = {
  className?: string
}

export function SignUpForm({ className }: SignUpFormProps) {
  const { errorMessage, handleSubmit, isLoading, register } = useSignUpForm()

  return (
    <form className={clsx(styles['sign-up-form'], className)} onSubmit={handleSubmit}>
      <UIFormTitle title={'Sign Up'} />
      <div className={styles['auth-icons']}>
        <UIGoogleIcon />
        <UIGithubIcon />
      </div>
      <UITextInput
        inputProps={{
          placeholder: 'Epam11',
          type: 'email',
          ...register('email', { required: true }),
        }}
        label={'Username'}
      />
      <UITextInput
        inputProps={{
          placeholder: 'Epam1@epam.com',
          type: 'email',
          ...register('email', { required: true }),
        }}
        label={'Email'}
      />
      <UITextInput
        inputProps={{
          placeholder: '****************',
          type: 'email',
          ...register('email', { required: true }),
        }}
        label={'Password'}
      />
      <UITextInput
        inputProps={{
          placeholder: '****************',
          type: 'password',
          ...register('password', { required: true }),
        }}
        label={'Password Confirmation'}
      />
      {/*TODO Вынести в отдельный ui? */}
      <UICheckBox>
        <div className={styles['agreement']}>
          <p>
            I agree to the{' '}
            <UILink color={'blue'} href={ROUTES_URL.TERMS_OF_SERVICE}>
              {' '}
              Terms of service{' '}
            </UILink>
            and
            <UILink href={ROUTES_URL.PRIVACY_POLICY}> Privacy Policy</UILink>
          </p>
        </div>
      </UICheckBox>
      <UIButton disabled={isLoading} variant={'primary'}>
        Sign Up
      </UIButton>
      <div className={styles['account-question']}>
        <p>Do you have an account?</p>
      </div>
      <UILink className={styles['sign-in-link']} href={ROUTES_URL.SIGN_IN}>
        Sign In
      </UILink>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}
