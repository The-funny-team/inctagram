import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'
import { DeviceInfo } from '@/widgets/Devices/ui/DeviceInfo'

import s from './Devices.module.scss'
type Props = {
  currentDeviceInfo: {
    currentDevice: boolean
    deviceName: string
    ipAddress: string
  }
}

export const CurrentDevice = ({ currentDeviceInfo }: Props) => {
  const { text } = useTranslation()

  return (
    <div className={s.currentRoot}>
      <Typography variant={'h3'}>{text.pages.profile.devices.currentDevice}</Typography>

      <DeviceInfo
        currentDevice={currentDeviceInfo.currentDevice}
        deviceName={currentDeviceInfo.deviceName}
        ipAddress={currentDeviceInfo.ipAddress}
      />
    </div>
  )
}
