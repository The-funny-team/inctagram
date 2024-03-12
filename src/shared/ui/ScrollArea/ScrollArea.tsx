import { ComponentPropsWithoutRef } from 'react'

import * as ScrollAreaRadix from '@radix-ui/react-scroll-area'
import { clsx } from 'clsx'

import s from './ScrollArea.module.scss'

export type ScrollbarProps = {
  maxHeight?: number
  maxWidth?: number
  type?: ScrollAreaRadix.ScrollAreaProps['type']
} & ComponentPropsWithoutRef<'div'>

export const ScrollArea = (props: ScrollbarProps) => {
  const {
    children,
    className,
    maxHeight = '100%',
    maxWidth = '100%',
    type = 'auto',
    ...restProps
  } = props

  const classNames = {
    root: clsx(s.root, className),
    scrollbar: s.scrollbar,
    thumb: s.thumb,
    viewport: s.viewport,
  }

  const maxHeightConverted = `${maxHeight}px`
  const maxWidthConverted = `${maxWidth}px`

  const viewportStyles = { maxHeight: maxHeightConverted, maxWidth: maxWidthConverted }

  return (
    <ScrollAreaRadix.Root asChild type={type}>
      <div className={classNames.root} {...restProps}>
        <ScrollAreaRadix.Viewport className={classNames.viewport} style={viewportStyles}>
          {children}
        </ScrollAreaRadix.Viewport>
        <ScrollAreaRadix.Scrollbar className={classNames.scrollbar} orientation={'vertical'}>
          <ScrollAreaRadix.Thumb className={classNames.thumb} />
        </ScrollAreaRadix.Scrollbar>
        <ScrollAreaRadix.Scrollbar className={classNames.scrollbar} orientation={'horizontal'}>
          <ScrollAreaRadix.Thumb className={classNames.thumb} />
        </ScrollAreaRadix.Scrollbar>
      </div>
    </ScrollAreaRadix.Root>
  )
}
