import { ArrowLeftShortIcon } from '@/shared/assets'
import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { setNextStage, setPrevStage } from '@/widgets/CreatePost/service'

import s from './Publish.module.scss'

export const Publish = () => {
  const dispatch = useAppDispatch()

  const setPerv = () => {
    dispatch(setPrevStage())
  }

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
