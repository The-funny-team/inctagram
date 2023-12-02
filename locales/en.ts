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
      agreementCheck: {
        agree: 'I agree to the',
        and: 'and',
        privacy: 'Privacy Policy',
        term: 'Terms of Service',
      },
      confirmPassword: 'Password confirmation',
      email: 'Email',
      formTitle: 'Sign Up',
      password: 'Password',
      questionAboutAccount: 'Do you have an account?',
      signInBtn: 'Sign Up',
      signUpLink: 'Sign In',
      username: 'Username',
    },
  },
}
export type LocaleType = typeof en
