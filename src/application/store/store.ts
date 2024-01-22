import { baseApi } from '@/shared/api/baseApi/baseApi'
import { citiesApi } from '@/shared/api/citiesApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(citiesApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
