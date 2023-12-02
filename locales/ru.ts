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
    home: 'Главная страница',
    passwordRecovery: {
      resendBtnText: 'Восстановить пароль',
      subtitle: 'Похоже, ссылка на проверку истек. Не волнуйтесь, мы можем снова отправить ссылку',
      title: 'Ссылка на проверку электронной почты истек',
    },
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
