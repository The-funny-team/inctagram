import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Card = ({ className, ...rest }: Props) => {
  return <div className={clsx(s.card, className)} {...rest}></div>
}
