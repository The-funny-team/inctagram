import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const DevicesList: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
