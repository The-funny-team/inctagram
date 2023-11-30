import { LocaleType } from './en'

export const ru: LocaleType = {
  layout: {
    header: {
      signInBtn: 'Войти',
      signUpBtn: 'Регистрация',
    },
  },
  modals: {
    expiredLink: {
      description: 'We have resent a verification link to epam@epam.com',
      title: 'Email sent',
    },
  },
  pages: {
    home: 'Главная страница',
  },
  widgets: {
    expiredLink: {
      btnTitle: 'Отправить ссылку еще раз',
      description:
        'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз.',
      title: 'Срок действия ссылки для подтверждения электронной почты истек',
    },
  },
}
