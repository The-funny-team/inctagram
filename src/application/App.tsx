import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'

import { WithStore } from '@/application/providers/WithStore'

import './styles/index.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  return <WithStore>{getLayout(<Component {...pageProps} />)}</WithStore>
}
