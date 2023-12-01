export const en = {
  layout: {
    header: {
      signInBtn: 'Log in',
      signUpBtn: 'Sign up',
    },
  },
  pages: {
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
  },
}
export type LocaleType = typeof en
