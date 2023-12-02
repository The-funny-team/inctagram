import { LocaleType } from './en'

export const ru: LocaleType = {
  errors: {
    signUp: {
      emailVerification: 'Электронная почта должна соответствовать формату example@example.com',
      maxPasswordLength20: 'Максимальное количество символов 20',
      maxPasswordLength30: 'Максимальное количество символов 30',
      minPasswordLength: 'Минимальное количество символов 6',
      passwordMismatch: 'Пароли должны совпадать',
      passwordVerification:
        'Пароль должен содержать 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
      usernameVerification: 'Пароль может содержать 0-9; A-Z; a-z; _ ; - ',
    },
  },

  layout: {
    header: {
      signInBtn: 'Войти',
      signUpBtn: 'Регистрация',
    },
  },
  pages: {
    home: 'Главная страница',
    signUp: {
      agreementCheck: {
        agree: 'Я согласен с',
        and: 'и',
        privacy: 'политикой конфиденциальности',
        term: 'условиями предоставления услуг',
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
}
