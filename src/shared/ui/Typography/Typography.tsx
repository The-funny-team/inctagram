import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './Typography.module.scss'

export type Props<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  className?: string
  variant?:
    | 'boldText14'
    | 'boldText16'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'large'
    | 'mediumText14'
    | 'regularLink'
    | 'regularText14'
    | 'regularText16'
    | 'semiBoldSmallText'
    | 'smallLink'
    | 'smallText'
}

export const Typography = <T extends ElementType = 'p'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props

  return <Component className={clsx(s[variant], className)} {...rest} />
}
