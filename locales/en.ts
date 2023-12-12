export const en = {
  layout: {
    header: {
      signInBtn: 'Log in',
      signUpBtn: 'Sign up',
    },
  },
  pages: {
    confirmedEmail: {
      description: 'Your email has been confirmed',
      signInBtn: 'Sign In',
      title: 'Congratulations!',
    },
    createNewPassword: {
      createNewPasswordBtn: 'Create new password',
      newPasswordLabel: 'New password',
      newPasswordLabelConfirmation: 'Password Confirmation',
      prompt: 'Your password must be between 6 and 20 characters',
      title: 'Create New Password',
    },
    expiredLink: {
      description:
        'Looks like the verification link has expired. Not to worry, we can send the link again',
      expiredLinkBtn: 'Resend link',
      title: 'Email verification link expired',
    },
    forgotPassword: {
      caption: 'Enter your email address and we will send you further instructions',
      captionAfterSubmit:
        'The link has been sent by email. If you don’t receive an email send link again',
      emailValidationError: 'The email must match the format example@example.com',
      inputLabel: 'Email',
      modal: {
        getBody: (email: string) => `We have sent a link to confirm your email to ${email}`,
        title: 'Email sent',
      },
      recaptcha: "I'm not a robot",
      resendLink: 'Send Link Again',
      sendLinkBtn: 'Send Link',
      signInBtn: 'Back to Sign In',
      title: 'Forgot Password',
    },
    home: 'Home page',
    signIn: {
      emailLabel: 'Email',
      forgotPasswordLink: 'Forgot Password?',
      formTitle: 'Sign In',
      passwordLabel: 'Password',
      questionAboutAccount: 'Don’t have an account?',
      signInBtn: 'Sign In',
      signUpLink: 'Sign Up',
    },
    signUp: {
      agreement: {
        description: `I agree to the <1>privacy</1> and <2>terms</2>`,
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      confirmPassword: 'Password confirmation',
      email: 'Email',
      formTitle: 'Sign Up',
      modal: {
        getDescription: (email: string) => `We have sent a link to confirm your email to ${email}`,
        title: 'Email sent',
      },
      password: 'Password',
      questionAboutAccount: 'Do you have an account?',
      signUpBtn: 'Sign Up',
      signUpLink: 'Sign In',
      username: 'Username',
    },
  },
  validation: {
    emailVerification: 'The email must match the format example@example.com',
    maxLength20: 'Maximum number of characters 20',
    maxLength30: 'Maximum number of characters 30',
    minLength6: 'Minimum number of characters 6',
    passwordMismatch: 'Passwords must match',
    passwordVerification:
      'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    usernameVerification: 'Username can contain 0-9; A-Z; a-z; _ ; - ',
  },
}
export type LocaleType = typeof en
