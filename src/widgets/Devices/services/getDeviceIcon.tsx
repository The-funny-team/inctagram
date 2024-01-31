import {
  BrowserIcon,
  ChromeIcon,
  DesktopIcon,
  FireFoxIcon,
  MobileIcon,
  OperaIcon,
} from '@/shared/assets/icons/devices'

export const getDeviceIcon = (name: string) => {
  switch (name) {
    case 'Chrome':
      return <ChromeIcon />
    case 'FireFox':
      return <FireFoxIcon />
    case 'Opera':
      return <OperaIcon />
    case 'mobile':
      return <MobileIcon />
    case 'desktop':
      return <DesktopIcon />
    default:
      return <BrowserIcon />
  }
}
