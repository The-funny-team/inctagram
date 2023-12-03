export const en = {
  errors: {
    signInform: {
      emailVerification: 'The email must match the format example@example.com',
      maxPasswordLength: 'Maximum number of characters 20',
      minPasswordLength: 'Minimum number of characters 6',
      passwordVerification:
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    },
  },
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
    expiredLink: {
      description:
        'Looks like the verification link has expired. Not to worry, we can send the link again',
      expiredLinkBtn: 'Resend link',
      modal: {
        getDescription: (email: string) => `We have resent a verification link to ${email}`,
        title: 'Email sent',
      },
      title: 'Email verification link expired',
    },
    home: 'Home page',
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
    signIn: {
      emailLabel: 'Email',
      forgotPasswordLink: 'Forgot Password?',
      formTitle: 'Sign In',
      passwordLabel: 'Password',
      questionAboutAccount: 'Don’t have an account?',
      signInBtn: 'Sign In',
      signUpLink: 'Sign Up',
    },
  },
}
export type LocaleType = typeof en
