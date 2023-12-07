import { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'

export const WithStore = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}
