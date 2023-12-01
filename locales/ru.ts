import { LocaleType } from './en'

export const ru: LocaleType = {
  layout: {
    header: {
      signInBtn: 'Войти',
      signUpBtn: 'Регистрация',
    },
  },
  pages: {
    forgotPassword: {
      caption: 'Введите вашу почту и мы вышлем вам дальнейшие иснструкции',
      captionAfterSubmit:
        'Письмо отправлено на почту. Если вы не получили писльмо нажмите на отправить письмо повторно',
      emailValidationError: 'Почта должна соответствовать формату example@example.com',
      inputLabel: 'Почта',
      modal: {
        getBody: (email: string) => `Мы выслали вам письмо для подтверждения почты на ${email}`,
        title: 'Письмо отправлено',
      },
      recaptcha: 'Я не робот',
      resendLink: 'Выслать Письмо Повторно',
      sendLinkBtn: 'Отправить Письмо',
      signInBtn: 'Вернуться на Вход',
      title: 'Восстановить Пароль',
    },
    home: 'Главная страница',
  },
}
