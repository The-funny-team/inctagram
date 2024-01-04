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
import { NavBarLink } from '@/shared/ui'
import { IconButton } from '@/shared/ui/IconButton'
import clsx from 'clsx'

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
    <div className={clsx(s.root, className)}>
      <nav className={s.nav}>
        <NavBarLink
          activeIcon={<FilledHomeIcon />}
          defaultIcon={<HomeIcon />}
          isActive={pathname === ROUTES_URL.HOME}
          linkUrl={ROUTES_URL.HOME}
        >
          {t.home}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledCreateIcon />}
          defaultIcon={<CreateIcon />}
          isActive={pathname === ROUTES_URL.CREATE}
          linkUrl={ROUTES_URL.CREATE}
        >
          {t.create}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledProfileIcon />}
          defaultIcon={<ProfileIcon />}
          isActive={pathname === ROUTES_URL.PROFILE}
          linkUrl={ROUTES_URL.PROFILE}
        >
          {t.profile}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledMessengerIcon />}
          defaultIcon={<MessengerIcon />}
          isActive={pathname === ROUTES_URL.MESSENGER}
          linkUrl={ROUTES_URL.MESSENGER}
        >
          {t.messenger}
        </NavBarLink>
        <NavBarLink
          defaultIcon={<SearchOutlineIcon />}
          isActive={pathname === ROUTES_URL.SEARCH}
          linkUrl={ROUTES_URL.SEARCH}
        >
          {t.search}
        </NavBarLink>
        <NavBarLink
          defaultIcon={<StatisticsIcon />}
          isActive={pathname === ROUTES_URL.STATISTICS}
          linkUrl={ROUTES_URL.STATISTICS}
        >
          {t.statistics}
        </NavBarLink>
        <NavBarLink
          activeIcon={<FilledFavoritesIcon />}
          defaultIcon={<FavoritesIcon />}
          isActive={pathname === ROUTES_URL.FAVORITES}
          linkUrl={ROUTES_URL.FAVORITES}
        >
          {t.favorites}
        </NavBarLink>
      </nav>
      <IconButton icon={<LogOutIcon />} onClick={() => console.log('Logout from app')}>
        {t.logOut}
      </IconButton>
    </div>
  )
}
