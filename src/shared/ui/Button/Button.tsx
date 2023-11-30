import React, { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'tertiary'
}

export const Button = <T extends ElementType = 'button'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth = true,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component className={clsx(s[variant], fullWidth && s.fullWidth, className)} {...rest}>
      {children}
    </Component>
  )
}
