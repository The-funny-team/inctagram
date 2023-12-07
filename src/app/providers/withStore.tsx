import { ComponentType } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app/store'

export const withStore =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    )
  }
