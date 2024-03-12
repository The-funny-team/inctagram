import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { DeviceInfo } from '@/widgets/Devices/ui/DeviceInfo'

import s from './Devices.module.scss'
type Props = {
  devicesList: Array<{
    currentDevice: boolean
    deviceName: string
    deviceType?: string
    ipAddress: string
    lastVisitDate?: string
  }>
}

export const ActiveSessions = ({ devicesList }: Props) => {
  const { text } = useTranslation()

  return (
    <div className={s.activeRoot}>
      <Button variant={'tertiary'}>{text.pages.profile.devices.terminateButton}</Button>
      <Typography variant={'h3'}>{text.pages.profile.devices.activeSessions}</Typography>

      {devicesList.map((device, index) => {
        return (
          <DeviceInfo
            currentDevice={false}
            deviceName={device.deviceName}
            deviceType={device.deviceType}
            ipAddress={device.ipAddress}
            key={index}
            lastVisitDate={device.lastVisitDate}
          />
        )
      })}
    </div>
  )
}
