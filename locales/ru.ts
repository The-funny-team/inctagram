import { LocaleType } from './en'

export const ru: LocaleType = {
  calendar: {
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    weekDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  },
  layout: {
    header: {
      signInBtn: 'Войти',
      signUpBtn: 'Регистрация',
    },
    navBar: {
      create: 'Создать',
      favorites: 'Избранное',
      home: 'Главная',
      logOut: 'Выйти',
      messenger: 'Мессенджер',
      profile: 'Мой профиль',
      search: 'Поиск',
      statistics: 'Статистика',
    },
    tabs: {
      devices: 'Устройства',
      general: 'Общая информация',
      management: 'Управление аккаунтом',
      payments: 'Мои платежи',
    },
  },

  pages: {
    confirmedEmail: {
      description: 'Ваш адрес электронной почты подтвержден',
      signInBtn: 'Войти',
      title: 'Поздравляем!',
    },
    createNewPassword: {
      createNewPasswordBtn: 'Создать новый пароль',
      newPasswordLabel: 'Новый пароль',
      newPasswordLabelConfirmation: 'Повторите пароль',
      prompt: 'Ваш пароль должен содержать от 6 до 20 символов',
      title: 'Задать новый пароль',
    },
    expiredLink: {
      description:
        'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз.',
      expiredLinkBtn: 'Отправить ссылку повторно',
      title: 'Срок действия ссылки для подтверждения электронной почты истек',
    },
    forgotPassword: {
      caption: 'Введите вашу почту и мы вышлем вам дальнейшие иснструкции',
      captionAfterSubmit:
        'Письмо отправлено на почту. Если вы не получили писльмо нажмите на отправить письмо повторно',
      emailValidationError: 'Почта должна соответствовать формату example@example.com',
      inputLabel: 'Почта',
      modal: {
        bodyWithOutEmail: 'Мы отправили ссылку для подтверждения на Вашу электронную почту',
        getBody: (email: string) => `Мы выслали вам письмо для подтверждения почты на ${email}`,
        title: 'Письмо отправлено',
      },
      recaptcha: 'Я не робот',
      resendLink: 'Выслать письмо повторно',
      sendLinkBtn: 'Отправить письмо',
      signInBtn: 'Страница входа',
      title: 'Восстановить пароль',
    },
    home: 'Главная страница',
    notFound: {
      captionBtn: 'Вернуться на главную',
      title: 'Извините! Эта страница недоступна',
    },
    privacyPolicy: {
      backToBtn: 'Назад к регистрации',
      descripton:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tortor vitae purus faucibus ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing. Massa enim nec dui nunc mattis enim ut tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tortor aliquam nulla facilisi cras. Elit pellentesque habitant morbi tristique senectus et netus. Nulla facilisi nullam vehicula ipsum a arcu cursus. Ut lectus arcu bibendum at varius vel pharetra. Etiam erat velit scelerisque in dictum non consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Id diam maecenas ultricies mi eget mauris pharetra. Tincidunt lobortis feugiat vivamus at augue. Non odio euismod lacinia at. Aliquet eget sit amet tellus. Auctor neque vitae tempus quam.\n' +
        'Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Nisl pretium fusce id velit ut tortor pretium. Eget arcu dictum varius duis at consectetur. Est placerat in egestas erat imperdiet sed euismod nisi porta. Scelerisque felis imperdiet proin fermentum. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vel turpis nunc eget lorem dolor sed viverra ipsum. Enim ut tellus elementum sagittis. At consectetur lorem donec massa sapien faucibus et molestie. Enim sit amet venenatis urna cursus. Id velit ut tortor pretium viverra suspendisse potenti.\n' +
        'Et magnis dis parturient montes nascetur ridiculus. Donec ultrices tincidunt arcu non sodales neque. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Consequat mauris nunc congue nisi vitae. Ut tellus elementum sagittis vitae et leo duis. Dignissim sodales ut eu sem. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Et magnis dis parturient montes nascetur ridiculus mus mauris. Morbi tempus iaculis urna id. Tristique nulla aliquet enim tortor. Libero nunc consequat interdum varius sit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Facilisi nullam vehicula ipsum a arcu cursus vitae. Arcu odio ut sem nulla pharetra. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Morbi non arcu risus quis varius quam quisque id diam. Ac turpis egestas sed tempus urna. Sit amet venenatis urna cursus eget nunc. Amet consectetur adipiscing elit ut aliquam purus sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.\n' +
        'Et egestas quis ipsum suspendisse ultrices gravida dictum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Pretium viverra suspendisse potenti nullam ac tortor vitae. Lobortis elementum nibh tellus molestie nunc non blandit. Eget nunc lobortis mattis aliquam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Quis commodo odio aenean sed adipiscing diam. Pharetra massa massa ultricies mi quis hendrerit. Et magnis dis parturient montes. Cursus metus aliquam eleifend mi in nulla posuere. Tristique senectus et netus et. A lacus vestibulum sed arcu non odio.\n' +
        'Sed elementum tempus egestas sed. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Gravida rutrum quisque non tellus orci ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dolor morbi non arcu risus quis varius quam quisque. Bibendum at varius vel pharetra vel turpis nunc. A cras semper auctor neque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Erat nam at lectus urna duis. Mauris pharetra et ultrices neque. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Justo nec ultrices dui sapien eget mi proin sed libero. Pellentesque sit amet porttitor eget dolor.\n' +
        'A diam maecenas sed enim ut. Fermentum et sollicitudin ac orci phasellus. Tincidunt vitae semper quis lectus nulla. Tincidunt dui ut ornare lectus sit amet est. Sed enim ut sem viverra aliquet eget sit. Eu augue ut lectus arcu bibendum at varius. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Varius vel pharetra vel turpis nunc eget lorem dolor. Arcu odio ut sem nulla pharetra. Bibendum neque egestas congue quisque. Facilisis volutpat est velit egestas dui. Orci nulla pellentesque dignissim enim sit amet. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Odio ut enim blandit volutpat maecenas volutpat blandit.\n' +
        'Eu mi bibendum neque egestas congue quisque egestas diam in. Neque viverra justo nec ultrices dui sapien. Congue mauris rhoncus aenean vel elit. Vitae aliquet nec ullamcorper sit. Tempus imperdiet nulla malesuada pellentesque. Sed lectus vestibulum mattis ullamcorper velit. Commodo odio aenean sed adipiscing diam. Viverra nam libero justo laoreet. Id neque aliquam vestibulum morbi blandit cursus. Vel facilisis volutpat est velit egestas dui id ornare. Feugiat nibh sed pulvinar proin.',
      title: 'Политика Конфидециальности',
    },
    profile: {
      addProfilePhoto: {
        addPhoto: 'Добавить фото профиля',
        deletePhoto: 'Удалить фото',
        deletePhotoQuestion: 'Вы уверены, что хотите удалить фото?',
        errorText: {
          description: `<1>error</1> <2>terms</2>`,
          error: 'Ошибка!',
          getDescription: (message: string) => `${message}`,
          sizeError: 'Размер фото должен быть менее 10 МБ',
          typeError: 'Формат загружаемой фотографии должен быть PNG или JPEG',
        },
        noButton: 'Нет',
        savePhoto: 'Сохранить',
        selectPhoto: 'Выберите фото',
        yesButton: 'Да',
      },
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
    signUp: {
      agreement: {
        description: `Я согласен с <1>privacy</1> и <2>terms</2>`,
        privacy: 'политикой конфиденциальности',
        terms: 'условиями предоставления услуг',
      },
      confirmPassword: 'Подтверждение пароля',
      email: 'Электронная почта',
      formTitle: 'Регистрация',
      modal: {
        getDescription: (email: string) =>
          `Мы отправили письмо для подтверждения почты на ${email}`,
        title: 'Письмо отправлено',
      },
      password: 'Пароль',
      questionAboutAccount: 'У вас есть учетная запись?',
      signUpBtn: 'Зарегистрироваться',
      signUpLink: 'Войти',
      username: 'Имя пользователя',
    },
    termsOfService: {
      backTo: 'Назад к регистрации',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas integer eget aliquet nibh. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Tortor vitae purus faucibus ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing. Massa enim nec dui nunc mattis enim ut tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Tortor aliquam nulla facilisi cras. Elit pellentesque habitant morbi tristique senectus et netus. Nulla facilisi nullam vehicula ipsum a arcu cursus. Ut lectus arcu bibendum at varius vel pharetra. Etiam erat velit scelerisque in dictum non consectetur. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Id diam maecenas ultricies mi eget mauris pharetra. Tincidunt lobortis feugiat vivamus at augue. Non odio euismod lacinia at. Aliquet eget sit amet tellus. Auctor neque vitae tempus quam.\n' +
        'Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Nisl pretium fusce id velit ut tortor pretium. Eget arcu dictum varius duis at consectetur. Est placerat in egestas erat imperdiet sed euismod nisi porta. Scelerisque felis imperdiet proin fermentum. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Proin nibh nisl condimentum id venenatis a condimentum vitae. Massa tincidunt dui ut ornare lectus sit amet est placerat. Vel turpis nunc eget lorem dolor sed viverra ipsum. Enim ut tellus elementum sagittis. At consectetur lorem donec massa sapien faucibus et molestie. Enim sit amet venenatis urna cursus. Id velit ut tortor pretium viverra suspendisse potenti.\n' +
        'Et magnis dis parturient montes nascetur ridiculus. Donec ultrices tincidunt arcu non sodales neque. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Consequat mauris nunc congue nisi vitae. Ut tellus elementum sagittis vitae et leo duis. Dignissim sodales ut eu sem. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Et magnis dis parturient montes nascetur ridiculus mus mauris. Morbi tempus iaculis urna id. Tristique nulla aliquet enim tortor. Libero nunc consequat interdum varius sit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Facilisi nullam vehicula ipsum a arcu cursus vitae. Arcu odio ut sem nulla pharetra. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Morbi non arcu risus quis varius quam quisque id diam. Ac turpis egestas sed tempus urna. Sit amet venenatis urna cursus eget nunc. Amet consectetur adipiscing elit ut aliquam purus sit. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.\n' +
        'Et egestas quis ipsum suspendisse ultrices gravida dictum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit. Pretium viverra suspendisse potenti nullam ac tortor vitae. Lobortis elementum nibh tellus molestie nunc non blandit. Eget nunc lobortis mattis aliquam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Quis commodo odio aenean sed adipiscing diam. Pharetra massa massa ultricies mi quis hendrerit. Et magnis dis parturient montes. Cursus metus aliquam eleifend mi in nulla posuere. Tristique senectus et netus et. A lacus vestibulum sed arcu non odio.\n' +
        'Sed elementum tempus egestas sed. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Gravida rutrum quisque non tellus orci ac. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dolor morbi non arcu risus quis varius quam quisque. Bibendum at varius vel pharetra vel turpis nunc. A cras semper auctor neque. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Erat nam at lectus urna duis. Mauris pharetra et ultrices neque. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Justo nec ultrices dui sapien eget mi proin sed libero. Pellentesque sit amet porttitor eget dolor.\n' +
        'A diam maecenas sed enim ut. Fermentum et sollicitudin ac orci phasellus. Tincidunt vitae semper quis lectus nulla. Tincidunt dui ut ornare lectus sit amet est. Sed enim ut sem viverra aliquet eget sit. Eu augue ut lectus arcu bibendum at varius. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Varius vel pharetra vel turpis nunc eget lorem dolor. Arcu odio ut sem nulla pharetra. Bibendum neque egestas congue quisque. Facilisis volutpat est velit egestas dui. Orci nulla pellentesque dignissim enim sit amet. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Odio ut enim blandit volutpat maecenas volutpat blandit.\n' +
        'Eu mi bibendum neque egestas congue quisque egestas diam in. Neque viverra justo nec ultrices dui sapien. Congue mauris rhoncus aenean vel elit. Vitae aliquet nec ullamcorper sit. Tempus imperdiet nulla malesuada pellentesque. Sed lectus vestibulum mattis ullamcorper velit. Commodo odio aenean sed adipiscing diam. Viverra nam libero justo laoreet. Id neque aliquam vestibulum morbi blandit cursus. Vel facilisis volutpat est velit egestas dui id ornare. Feugiat nibh sed pulvinar proin.',
      title: 'Условия использования',
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
