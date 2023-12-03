export const en = {
  errors: {
    signUp: {
      emailVerification: 'The email must match the format example@example.com',
      maxPasswordLength20: 'Maximum number of characters 20',
      maxPasswordLength30: 'Maximum number of characters 30',
      minPasswordLength: 'Minimum number of characters 6',
      passwordMismatch: 'Passwords must match',
      passwordVerification:
        'Password must contain 0-9, a-z, A-Z, ! " # $ % & \' () * + , - . / : ; < = > ? @ [ \\ ] ^ _ ` { | } ~',
      usernameVerification: 'Password must contain 0-9; A-Z; a-z; _ ; - ',
    },
  },
  layout: {
    header: {
      signInBtn: 'Log in',
      signUpBtn: 'Sign up',
    },
  },
  pages: {
    home: 'Home page',
    signUp: {
      agreement: {
        description: `I agree to the <1>privacy</1> and <2>terms</2>`,
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      confirmPassword: 'Password confirmation',
      email: 'Email',
      formTitle: 'Sign Up',
      password: 'Password',
      questionAboutAccount: 'Do you have an account?',
      signUpBtn: 'Sign Up',
      signUpLink: 'Sign In',
      username: 'Username',
    },
  },
}
export type LocaleType = typeof en
