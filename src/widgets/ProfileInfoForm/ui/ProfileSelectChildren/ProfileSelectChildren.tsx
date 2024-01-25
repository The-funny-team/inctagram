import { ReactElement } from 'react'
import { FixedSizeList } from 'react-window'

import * as SelectRadix from '@radix-ui/react-select'

import s from './ProfileSelectChildren.module.scss'
type Props = {
  options: Array<{ label: ReactElement | string; value: string }>
}

export const ProfileSelectChildren = ({ options }: Props) => {
  return (
    <FixedSizeList
      className={s.scrollContainer}
      height={250}
      itemCount={options.length}
      itemSize={36}
      width={'100%'}
    >
      {({ index, style }) => {
        return (
          <SelectRadix.Item
            className={s.item}
            key={options[index].value}
            style={style}
            {...options[index]}
          >
            <SelectRadix.ItemText asChild>
              <span className={s.itemText}>{options[index].label}</span>
            </SelectRadix.ItemText>
          </SelectRadix.Item>
        )
      }}
    </FixedSizeList>
  )
}
