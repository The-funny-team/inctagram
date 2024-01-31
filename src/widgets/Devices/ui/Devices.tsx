import { ActiveSessions } from '@/widgets/Devices/ui/ActiveSessions'
import { CurrentDevice } from '@/widgets/Devices/ui/CurrentDevice'

export const Devices = () => {
  const currentDeviceInfo = {
    currentDevice: true,
    deviceName: 'Chrome',
    ipAddress: '22.345.345.12',
  }
  const devicesList = [
    {
      currentDevice: false,
      deviceName: 'Apple iMac 27',
      deviceType: 'desktop',
      ipAddress: '22.345.345.12',
      lastVisitDate: '22.09.2022',
    },
    {
      currentDevice: false,
      deviceName: 'Iphone 14 Pro Max',
      deviceType: 'mobile',
      ipAddress: '22.345.345.12',
      lastVisitDate: '22.09.2022',
    },
    {
      currentDevice: false,
      deviceName: 'Iphone 14 Pro Max',
      deviceType: 'mobile',
      ipAddress: '22.345.345.12',
      lastVisitDate: '22.09.2022',
    },
  ]

  return (
    <>
      <CurrentDevice currentDeviceInfo={currentDeviceInfo} />
      {devicesList.length > 0 && <ActiveSessions devicesList={devicesList} />}
    </>
  )
}
