import React, { ComponentPropsWithoutRef } from 'react'

import TimeManagementRafiki from '@/shared/assets/images/TimeManagementRafiki.svg'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Image from 'next/image'

import styles from './PasswordRecovery.module.scss'

import { usePasswordRecovery } from '../service/usePasswordRecovery'

type Props = {
  className?: string
} & ComponentPropsWithoutRef<'div'>

export const PasswordRecovery: React.FC<Props> = ({ className, ...props }: Props) => {
  const { text } = useTranslation()
  const { recoverPassword } = usePasswordRecovery()

  return (
    <div className={clsx(className, styles.passwordRecovery)} {...props}>
      <div className={styles.textContent}>
        <Typography as={'h1'} className={styles.title} variant={'h1'}>
          {text.pages.passwordRecovery.title}
        </Typography>
        <Typography as={'p'} className={styles.subtitle} variant={'regularText16'}>
          {text.pages.passwordRecovery.subtitle}
        </Typography>
      </div>
      <Button className={styles.recoveryBtn} onClick={recoverPassword}>
        <Typography as={'p'} className={styles.formTitle} variant={'regularText16'}>
          {text.pages.passwordRecovery.resendBtnText}
        </Typography>
      </Button>
      <Image alt={'There is no'} height={353} priority src={TimeManagementRafiki} width={473} />
    </div>
  )
}
