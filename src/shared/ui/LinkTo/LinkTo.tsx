import { ArrowLeftIcon } from '@/shared/assets'
import { Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './LinkTo.module.scss'

type Props = {
  children: string
  className?: string
  href?: string
}
export const LinkTo = ({ children, className, href }: Props) => {
  const router = useRouter()
  const redirectHandler = () => {
    href && router.push(href)
    !href && router.back()
  }

  return (
    <div className={clsx(s.linkTo, className)} onClick={redirectHandler}>
      <ArrowLeftIcon />
      <Typography as={'span'} variant={'regularText14'}>
        {children}
      </Typography>
    </div>
  )
}
