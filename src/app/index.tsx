import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { WithReactQueryProvider } from './providers/withReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export function App({ Component, pageProps }: AppProps) {
  return (
    <WithReactQueryProvider>
      <div className={inter.className}></div>
      <Component {...pageProps} />
    </WithReactQueryProvider>
  )
}
