import { LocaleType } from './en'

export const ru: LocaleType = {
  errors: {
    signInform: {
      emailVerification: 'Электронная почта должна соответствовать формату example@example.com',
      maxPasswordLength: 'Максимальное количество символов 20',
      minPasswordLength: 'Минимальное количество символов 6',
      passwordVerification:
        'Пароль должен содержать 0–9, a–z, A–Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
    },
  },
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
  },
}
