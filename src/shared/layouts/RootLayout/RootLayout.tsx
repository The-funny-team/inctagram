import React, { PropsWithChildren, ReactElement } from 'react'
import { ToastContainer } from 'react-toastify'

import { HeadMeta } from '@/shared/ui/HeadMeta'
import { Header } from '@/widgets/Header'
import clsx from 'clsx'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.css'

import s from './RootLayout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable={false}
        hideProgressBar
        limit={3}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position={'top-center'}
        rtl={false}
        theme={'colored'}
      />
      <HeadMeta />
      <div className={clsx(s.root, inter.className)}>
        <Header />
        <div className={s.container}>{children}</div>
      </div>
    </>
  )
}

export const getRootLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
