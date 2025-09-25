import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Cloud Dashboard',
  metrics: {
    totalUsers: 1250,
    activeServices: 8,
    serverUptime: '99.9%',
    totalStorage: '2.4TB'
  },
  isLoading: false,
  notifications: []
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload
    },
    updateMetrics: (state, action) => {
      state.metrics = { ...state.metrics, ...action.payload }
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        message: action.payload,
        timestamp: new Date().toISOString()
      })
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
    },
    clearNotifications: (state) => {
      state.notifications = []
    }
  }
})

export const {
  updateTitle,
  updateMetrics,
  setLoading,
  addNotification,
  removeNotification,
  clearNotifications
} = dashboardSlice.actions

export default dashboardSlice.reducer
