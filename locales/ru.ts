import { LocaleType } from './en'

export const ru: LocaleType = {
  layout: {
    header: {
      signInBtn: 'Войти',
      signUpBtn: 'Регистрация',
    },
  },
  pages: {
    expiredLink: {
      description:
        'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз.',
      expiredLinkBtn: 'Отправить ссылку повторно',
      modal: {
        getDescription: (email: string) => `Мы отправили ссылку для подтверждения на ${email}`,
        title: 'Email отправлен',
      },
      title: 'Срок действия ссылки для подтверждения электронной почты истек',
    },
    home: 'Главная страница',
  },
}
