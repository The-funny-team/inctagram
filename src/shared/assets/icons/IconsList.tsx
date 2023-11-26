import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const IconsList: FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
