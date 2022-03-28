import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
// import postReducer from './posts/postSlice'
import { postApi } from './api'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
})

setupListeners(store.dispatch)