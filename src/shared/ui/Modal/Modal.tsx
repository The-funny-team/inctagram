import React, { FC, ReactNode, useState } from 'react'

import { Cross2Icon } from '@/shared/assets'
import * as Dialog from '@radix-ui/react-dialog'

import styles from './Modal.module.scss'

type Props = {
  children?: ReactNode
  isOpen: boolean
  onIsOpenChange: (event: any) => void
  title: string
}

export const Modal: FC<Props> = ({ children, isOpen, onIsOpenChange, title }: Props) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <div className={styles.dialogHeader}>
            <Dialog.Title className={styles.dialogTitle}>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={styles.iconButton} onClick={onIsOpenChange}>
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
