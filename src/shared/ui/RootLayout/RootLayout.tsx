import React, { PropsWithChildren, ReactElement } from 'react'
import { ToastContainer } from 'react-toastify'

import { useMeQuery } from '@/shared/api/profileApi/profileApi'
import { Header } from '@/widgets/Header'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import 'react-toastify/dist/ReactToastify.css'

import s from './RootLayout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  const { data } = useMeQuery()

  const isLoggedIn = !!data

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
      <Head>
        <title>Inctagram</title>
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <div className={`${s.container} ${inter.className}`}>
        <Header isLoggedIn={isLoggedIn} />
        {children}
      </div>
    </>
  )
}

export const getRootLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
