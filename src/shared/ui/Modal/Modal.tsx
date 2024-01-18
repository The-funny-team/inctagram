import { FC, ReactNode } from 'react'

import { Cross2Icon } from '@/shared/assets'
import * as Dialog from '@radix-ui/react-dialog'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import clsx from 'clsx'

import styles from './Modal.module.scss'

type Props = {
  children?: ReactNode
  className?: string
  isOpen: boolean
  onIsOpenChange: (event: any) => void
  title: string
}

export const Modal: FC<Props> = ({ children, className, isOpen, onIsOpenChange, title }: Props) => {
  return (
    <Dialog.Root onOpenChange={onIsOpenChange} open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={clsx(styles.dialogContent, inter.className, className)}>
          <div className={styles.dialogHeader}>
            <Dialog.Title className={styles.dialogTitle}>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={styles.iconButton}>
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>
          {children && <div className={styles.content}>{children}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
