import { CalendarBtnLeftIcon } from '@/shared/assets/icons/CalendarBtnLeftIcon'
import { CalendarBtnRightIcon } from '@/shared/assets/icons/CalendarBtnRightIcon'

import s from './ButtonsClendar.module.scss'
type CalendarButtonsPropsType = {
  direction: 'left' | 'right'
}
export const ButtonsCalendar = ({ direction }: CalendarButtonsPropsType) => {
  return (
    <div>
      <i>
        <div className={s.shapeBtn}>
          {direction === 'left' ? <CalendarBtnLeftIcon /> : <CalendarBtnRightIcon />}
        </div>
      </i>
    </div>
  )
}
