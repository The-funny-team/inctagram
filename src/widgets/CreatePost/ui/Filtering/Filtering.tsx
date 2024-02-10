import { ArrowLeftShortIcon } from '@/shared/assets'
import { Button, Typography } from '@/shared/ui'

import s from './Filtering.module.scss'

type Props = {
  setNext: () => void
  setPerv: () => void
}

export const Filtering = ({ setNext, setPerv }: Props) => {
  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Filtering
        </Typography>
        <Button onClick={setNext} style={{ padding: 'unset' }} variant={'link'}>
          Next
        </Button>
      </div>
      <div className={s.body}>body</div>
    </div>
  )
}
