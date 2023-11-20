import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { WithReactQueryProvider } from './providers/withReactQueryProvider'
import './styles/index.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithReactQueryProvider>
      <div>
        <div className={inter.className}></div>
        <Component {...pageProps} />
      </div>
    </WithReactQueryProvider>
  )
}
