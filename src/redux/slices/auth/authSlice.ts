import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type isAuthType = {
  isAuth: boolean
}

const initialState: isAuthType = {
  isAuth: false,
}

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    resetAuth: () => initialState,
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export const { resetAuth, setAuth } = authSlice.actions
export default authSlice.reducer
