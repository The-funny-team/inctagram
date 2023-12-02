export const en = {
  layout: {
    header: {
      signInBtn: 'Log in',
      signUpBtn: 'Sign up',
    },
  },
  pages: {
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
  },
}
export type LocaleType = typeof en
