import {
  CreateIcon,
  FavoritesIcon,
  FilledCreateIcon,
  FilledFavoritesIcon,
  FilledHomeIcon,
  FilledMessengerIcon,
  FilledProfileIcon,
  HomeIcon,
  LogOutIcon,
  MessengerIcon,
  ProfileIcon,
  SearchOutlineIcon,
  StatisticsIcon,
} from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Button } from '@/shared/ui'
import clsx from 'clsx'
import Link from 'next/link'

import s from './NavBar.module.scss'

type Props = {
  className?: string
}

export const NavBar = ({ className }: Props) => {
  const {
    router: { pathname },
    text: { navBar: t },
  } = useTranslation()

  return (
    <aside className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.HOME && s.active)}
          href={ROUTES_URL.HOME}
        >
          {pathname === ROUTES_URL.HOME ? <FilledHomeIcon /> : <HomeIcon />}
          {t.home}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.CREATE && s.active)}
          href={ROUTES_URL.CREATE}
        >
          {pathname === ROUTES_URL.CREATE ? <FilledCreateIcon /> : <CreateIcon />}
          {t.create}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.PROFILE && s.active)}
          href={ROUTES_URL.PROFILE}
        >
          {pathname === ROUTES_URL.PROFILE ? <FilledProfileIcon /> : <ProfileIcon />}
          {t.profile}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.MESSENGER && s.active)}
          href={ROUTES_URL.MESSENGER}
        >
          {pathname === ROUTES_URL.MESSENGER ? <FilledMessengerIcon /> : <MessengerIcon />}
          {t.messenger}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.SEARCH && s.active)}
          href={ROUTES_URL.SEARCH}
        >
          <SearchOutlineIcon />
          {t.search}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.STATISTICS && s.active)}
          href={ROUTES_URL.STATISTICS}
        >
          <StatisticsIcon />
          {t.statistics}
        </Button>
        <Button
          as={Link}
          className={clsx(s.button, pathname === ROUTES_URL.FAVORITES && s.active)}
          href={ROUTES_URL.FAVORITES}
        >
          {pathname === ROUTES_URL.MESSENGER ? <FilledFavoritesIcon /> : <FavoritesIcon />}
          {t.favorites}
        </Button>
      </nav>
      <Button className={s.button} onClick={() => console.log('Logout from app')}>
        <LogOutIcon />
        {t.logOut}
      </Button>
    </aside>
  )
}
