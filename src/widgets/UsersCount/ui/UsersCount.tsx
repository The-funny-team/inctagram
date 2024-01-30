import { Card, Typography } from '@/shared/ui'

import s from './UsersCount.module.scss'

type Props = {
  usersCount: string[]
}

export const UsersCount = ({ usersCount }: Props) => {
  return (
    <Card className={s.usersCountField}>
      <Typography as={'h2'} variant={'h2'}>
        Registered users:
      </Typography>
      <ul className={s.usersCount}>
        {usersCount.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
    </Card>
  )
}
