import { LocaleType } from './en'

export const ru: LocaleType = {
  layout: {
    header: {
      signInBtn: 'Войти',
      signUpBtn: 'Регистрация',
    },
  },
  pages: {
    confirmedEmail: {
      description: 'Ваш адрес электронной почты подтвержден',
      signInBtn: 'Войти',
      title: 'Поздравляем!',
    },
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
    signIn: {
      emailLabel: 'Электронная почта',
      forgotPasswordLink: 'Забыли пароль?',
      formTitle: 'Войти',
      passwordLabel: 'Пароль',
      questionAboutAccount: 'У вас нет учетной записи?',
      signInBtn: 'Войти',
      signUpLink: 'Зарегистрироваться',
    },
    signUp: {
      agreement: {
        description: `Я согласен с <1>privacy</1> и <2>terms</2>`,
        privacy: 'политикой конфиденциальности',
        terms: 'условиями предоставления услуг',
      },
      confirmPassword: 'Подтверждение пароля',
      email: 'Электронная почта',
      formTitle: 'Регистрация',
      password: 'Пароль',
      questionAboutAccount: 'У вас есть учетная запись?',
      signUpBtn: 'Зарегистрироваться',
      signUpLink: 'Войти',
      username: 'Имя пользователя',
    },
  },
  validation: {
    emailVerification: 'Электронная почта должна соответствовать формату example@example.com',
    maxLength20: 'Максимальное количество символов 20',
    maxLength30: 'Максимальное количество символов 30',
    minLength6: 'Минимальное количество символов 6',
    passwordMismatch: 'Пароли должны совпадать',
    passwordVerification:
      'Пароль должен содержать 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    usernameVerification: 'Имя пользователя может содержать 0-9; A-Z; a-z; _ ; - ',
  },
}
