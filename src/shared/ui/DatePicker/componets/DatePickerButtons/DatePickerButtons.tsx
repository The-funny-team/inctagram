import { MouseEventHandler } from 'react'

import { CalendarBtnLeftIcon, CalendarBtnRightIcon } from '@/shared/assets'

type ButtonsPropsType = {
  className: string
  direction: string
  handleClick: MouseEventHandler<HTMLElement> | undefined
}

export const DatePickerButtons = ({ className, direction, handleClick }: ButtonsPropsType) => {
  return (
    <div>
      <i
        onClick={handleClick}
        style={{
          cursor: 'pointer',
        }}
      >
        <div className={className}>
          {direction === 'left' ? <CalendarBtnLeftIcon /> : <CalendarBtnRightIcon />}
        </div>
      </i>
    </div>
  )
}
