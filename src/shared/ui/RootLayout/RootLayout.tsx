import React, { PropsWithChildren, ReactElement, useEffect, useLayoutEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import { useLazyMeQuery } from '@/shared/api/profileApi'
import { ROUTES_URL } from '@/shared/const'
import { Loader } from '@/shared/ui'
import { Header } from '@/widgets/Header'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

import 'react-toastify/dist/ReactToastify.css'

import s from './RootLayout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  const router = useRouter()
  const [profileInfo, { isLoading }] = useLazyMeQuery()

  const getProfileData = async () => {
    const { data: profileData } = await profileInfo()

    if (!profileData) {
      void router.push(ROUTES_URL.SIGN_IN)
    }

    if (profileData && router.pathname === ROUTES_URL.SIGN_IN) {
      void router.push(ROUTES_URL.HOME)
    }
  }

  useEffect(() => {
    void getProfileData()
  }, [router.pathname])

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
        <title>Next App</title>
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <div className={inter.className}>
        <Header isLoggedIn={false} />
        {isLoading ? <Loader /> : <main className={s.main}>{children}</main>}
      </div>
    </>
  )
}

export const getRootLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
