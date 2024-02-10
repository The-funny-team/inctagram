import { ArrowLeftShortIcon } from '@/shared/assets'
import { Button, Typography } from '@/shared/ui'

import s from './Publish.module.scss'

type Props = {
  setPerv: () => void
}

export const Publish = ({ setPerv }: Props) => {
  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Publication
        </Typography>
        <Button style={{ padding: 'unset' }} variant={'link'}>
          Publish
        </Button>
      </div>
      <div className={s.body}>body</div>
    </div>
  )
}
