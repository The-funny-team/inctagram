import { LogOutIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { getDeviceIcon } from '@/widgets/Devices/services/getDeviceIcon'

import s from './Devices.module.scss'

type PropsType = {
  currentDevice: boolean
  deviceName: string
  deviceType?: string
  ipAddress: string
  lastVisitDate?: string
}

export const DeviceInfo = ({
  currentDevice,
  deviceName,
  deviceType,
  ipAddress,
  lastVisitDate,
}: PropsType) => {
  const logoutHandler = () => {}
  const { text } = useTranslation()

  return (
    <div className={s.device}>
      <div className={s.deviceIcon}>
        {deviceType ? getDeviceIcon(deviceType) : getDeviceIcon(deviceName)}
      </div>
      <div className={s.deviceParam}>
        <Typography variant={'boldText16'}>{deviceName}</Typography>
        <Typography variant={'regularText14'}>IP: {ipAddress}</Typography>
        {!currentDevice && (
          <Typography variant={'smallText'}>
            {text.pages.profile.devices.lastVisit} {lastVisitDate}
          </Typography>
        )}
      </div>
      {!currentDevice && (
        <Button className={s.logOutButton} onClick={logoutHandler}>
          <LogOutIcon /> {text.pages.profile.devices.logOut}
        </Button>
      )}
    </div>
  )
}
