import { createSlice } from '@reduxjs/toolkit'
import regions from '../../constants/regions.json'
import counters from '../../constants/counters.json'
import charts from '../../constants/charts.json'
import notificationsData from '../../constants/notifications.json'
import { changeTheme } from '../../utils/theme'

const initialState = {
  title: 'Cloud Dashboard',
  theme: 'dark',
  isLoading: true,
  isNotificationPanelOpen: false, // Track if notification panel/popover is open
  realTimeNotificationCount: 0, // Track how many times addRealTimeNotification has been called
  selectedRegion: 'us-east-1', // Current selected region
  regions: regions, // Available regions list
  counts: counters,  // Current snapshot counts
  charts: charts, // Real-time charts with short-term rolling metrics
  notifications: notificationsData.notifications, // Recent notifications / alerts
  randomNotifications: notificationsData.randomNotifications, // Array of random notifications to cycle through after first 2 calls
};


export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setNotificationPanelOpen: (state, action) => {
      state.isNotificationPanelOpen = action.payload
    },
    addNotification: (state, action) => {
      state.notifications.unshift({
        id: Date.now(),
        type: action.payload.type || "info",
        message: action.payload.message,
        time: action.payload.time || "Just now",
        isRead: false
      })
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
    },
    clearNotifications: (state) => {
      state.notifications = []
    },
    markAllNotificationsAsRead: (state) => {
      state.notifications.forEach(notification => {
        notification.isRead = true
      })
    },
    markNotificationAsRead: (state, action) => {
      const notification = state.notifications.find(n => n.id === action.payload)
      if (notification) {
        notification.isRead = true
      }
    },
    toggleTheme: (state) => {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = theme;
      changeTheme(theme);
    },
    addRealTimeNotification: (state) => {
      // Increment the counter
      state.realTimeNotificationCount++

      let notificationMessage, notificationType

      // For the first 2 calls (30 seconds x 2), use the original logic
      if (state.realTimeNotificationCount <= 2) {
        notificationMessage = "EC2 Instance i-12345 changed from Restarting to Running"
        notificationType = "success"

        // Update EC2 Instance Status [Bar Chart]
        if (state.charts[1].data[2].instances > 0) {
          state.charts[1].data[2].instances-- // Restarting
        }
        state.charts[1].data[0].instances++ // Running

        // Update Resource Distribution [Donut Chart]
        state.charts[0].data[0].value++

        // Update count cards [Count Cards]
        state.counts[0].count++ // Total Active Resources
        state.counts[1].count++ // Running EC2 Instances
      }
      else {
        // After first 2 calls, use random notifications from the array
        const randomIndex = Math.floor(Math.random() * state.randomNotifications.length)
        const randomNotification = state.randomNotifications[randomIndex]
        notificationMessage = randomNotification.message
        notificationType = randomNotification.type
      }

      // Add the notification
      state.notifications.unshift({
        id: Date.now(),
        type: notificationType,
        message: notificationMessage,
        time: "Just now",
        isRead: false
      })
    },
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload
      state.isLoading = true
    }
  }
})

export const {
  updateTitle,
  updateMetrics,
  setLoading,
  setNotificationPanelOpen,
  addNotification,
  removeNotification,
  clearNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
  addRealTimeNotification,
  setSelectedRegion,
  toggleTheme
} = dashboardSlice.actions

export default dashboardSlice.reducer
