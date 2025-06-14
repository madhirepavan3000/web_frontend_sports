import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import newsReducer from './slices/newsSlice'
import payoutReducer from './slices/payoutSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    payout: payoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 