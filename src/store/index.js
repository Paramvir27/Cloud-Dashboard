import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './slices/dashboardSlice'

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
})

// Export types for TypeScript projects (commented out for JS)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
