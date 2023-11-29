import React, { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/Header'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const RootLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
        <link href={'/favicon.ico'} rel={'icon'} />
      </Head>
      <div className={inter.className}>
        <Header isLoggedIn={false} />
        <main>{children}</main>
      </div>
    </>
  )
}

export const getRootLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
