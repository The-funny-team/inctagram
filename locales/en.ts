export const en = {
  layout: {
    header: {
      signInBtn: 'Log in',
      signUpBtn: 'Sign up',
    },
  },
  modals: {
    expiredLink: {
      description: 'Мы отправили ссылку для подтверждения на epam@epam.com',
      title: 'Email отправлен',
    },
  },
  pages: {
    expiredLink: {
      description:
        'Looks like the verification link has expired. Not to worry, we can send the link again',
      expiredLinkBtn: 'Resend link',
      modal: {
        description: 'Мы отправили ссылку для подтверждения на epam@epam.com',
        title: 'Email отправлен',
      },
      title: 'Email verification link expired',
    },
    home: 'Home page',
  },
}
export type LocaleType = typeof en
