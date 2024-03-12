import { baseApi } from '@/shared/api/baseApi'
import { citiesApi } from '@/shared/api/citiesApi'
import { createPostSlice } from '@/widgets/CreatePost/service'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(citiesApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [createPostSlice.name]: createPostSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
