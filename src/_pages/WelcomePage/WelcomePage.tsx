import { getRootLayout } from '@/shared/layouts'
import { getArrayOfUsersCount } from '@/shared/lib/helpers'
import { UsersCount } from '@/widgets/UsersCount'

import s from './WelcomePage.module.scss'

export const WelcomePage = () => {
  const classNames = {
    root: s.root,
  }
  // Data from server
  const registeredUsers = 57
  const columnCount = 6

  const usersCount = getArrayOfUsersCount(registeredUsers, columnCount)

  return (
    <main className={classNames.root}>
      <UsersCount usersCount={usersCount} />
    </main>
  )
}

WelcomePage.getLayout = getRootLayout
