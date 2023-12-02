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
