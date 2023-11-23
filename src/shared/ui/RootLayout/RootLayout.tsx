import React, { PropsWithChildren, ReactElement } from 'react'

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
      <main className={inter.className}>{children}</main>
    </>
  )
}

export const getRootLayout = (page: ReactElement) => {
  return <RootLayout>{page}</RootLayout>
}
