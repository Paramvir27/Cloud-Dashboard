import { createSlice } from '@reduxjs/toolkit'
import regions from '../../constants/regions.json'

const initialState = {
  title: 'Cloud Dashboard',
  isLoading: true,
  isNotificationPanelOpen: false, // Track if notification panel/popover is open
  realTimeNotificationCount: 0, // Track how many times addRealTimeNotification has been called
  selectedRegion: 'us-east-1', // Current selected region
  regions: regions, // Available regions list

  // Current snapshot counts
  counts: [
    {
      heading: "Total Active Resources",
      description: "Current total number of resources",
      count: 15,
      size: "1/4",
    },
    {
      heading: "Running EC2 Instances",
      description: "Instances currently running",
      count: 4,
      size: "1/4",
    },
    {
      heading: "Active Lambda Functions",
      description: "Lambda functions currently deployed",
      count: 8,
      size: "1/4",
    },
    {
      heading: "S3 Storage Used",
      description: "Current storage used across all S3 buckets (GB)",
      count: 123,
      size: "1/4",
    },
  ],

  // Real-time charts with short-term rolling metrics
  charts: [
    {
      heading: "Resource Distribution",
      description: "Current snapshot of resource types",
      type: "donut",
      size: "1/2",
      data: [
        { name: "EC2 Instances", value: 4 },
        { name: "Lambda Functions", value: 8 },
        { name: "S3 Buckets", value: 3 },
      ],
    },
    {
      heading: "EC2 Instance Status",
      description: "Current status of EC2 instances",
      type: "bar",
      size: "1/2",
      data: [
        { name: "Running", instances: 4 },
        { name: "Stopped", instances: 1 },
        { name: "Restarting", instances: 2 },
        { name: "Failed", instances: 0 },
      ],
    },
    {
      heading: "Average CPU Usage",
      description: "CPU utilization across EC2 instances (last 1 hour, 5-min intervals)",
      type: "area",
      size: "1",
      data: [
        { time: "00:00", cpu: 45 },
        { time: "00:05", cpu: 50 },
        { time: "00:10", cpu: 52 },
        { time: "00:15", cpu: 48 },
        { time: "00:20", cpu: 55 },
        { time: "00:25", cpu: 53 },
        { time: "00:30", cpu: 50 },
        { time: "00:35", cpu: 49 },
        { time: "00:40", cpu: 51 },
        { time: "00:45", cpu: 54 },
        { time: "00:50", cpu: 50 },
        { time: "00:55", cpu: 48 },
      ],
    },
    {
      heading: "S3 Storage & Requests",
      description: "Storage (GB) and requests (last 1 hour, 5-min intervals)",
      type: "line",
      size: "1/2",
      data: [
        { time: "00:00", storage: 85.0, requests: 40 },
        { time: "00:05", storage: 87.1, requests: 60 },
        { time: "00:10", storage: 89.2, requests: 120 },
        { time: "00:15", storage: 89.3, requests: 100 },
        { time: "00:20", storage: 95.25, requests: 130 },
        { time: "00:25", storage: 96.4, requests: 140 },
        { time: "00:30", storage: 100.5, requests: 155 },
        { time: "00:35", storage: 105.6, requests: 167 },
        { time: "00:40", storage: 110.65, requests: 143 },
        { time: "00:45", storage: 115.7, requests: 160 },
        { time: "00:50", storage: 120.8, requests: 180 },
        { time: "00:55", storage: 122.9, requests: 190 },
      ],
    },
    {
      heading: "Lambda Invocation Health",
      description: "Success vs Error invocations (last 15 minutes)",
      type: "pie",
      size: "1/2",
      data: [
        { name: "Success Invocations", value: 320 },
        { name: "Error Invocations", value: 15 },
      ],
    },
  ],

  // Recent notifications / alerts
  notifications: [
    {
      id: 1,
      type: "warning",
      message: "EC2 Instance i-02345 stopped unexpectedly (1 of 4 running instances affected)",
      time: "Just now",
      isRead: false,
    },
    {
      id: 2,
      type: "error",
      message: "Lambda function 'processData' had 2 failed invocations (1 of 8 functions affected)",
      time: "5 minutes ago",
      isRead: false,
    },
    {
      id: 3,
      type: "info",
      message: "S3 bucket 'user-uploads' storage usage reached 120 GB (1 of 3 buckets)",
      time: "10 minutes ago",
      isRead: false,
    },
  ],

  // Array of random notifications to cycle through after first 2 calls
  randomNotifications: [
    {
      type: "info",
      message: "Auto-scaling group launched new EC2 instance i-98765",
    },
    {
      type: "warning",
      message: "Lambda function 'data-processor' memory usage approaching limit",
  
    },
    {
      type: "success",
      message: "S3 bucket 'user-uploads' lifecycle policy applied successfully",
    }
  ],
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
    addRealTimeNotification: (state) => {
      // Increment the counter
      state.realTimeNotificationCount++

      let notificationMessage, notificationType

      // For the first 2 calls (30 seconds x 2), use the original logic
      if (state.realTimeNotificationCount <= 2) {
        notificationMessage = "EC2 Instance i-12345 changed from Restarting to Running"
        notificationType = "success"

        // Update EC2 Instance Status chart data (same logic for all notifications)
        const ec2StatusChart = state.charts.find(chart => chart.heading === "EC2 Instance Status")
        if (ec2StatusChart) {
          const restartingData = ec2StatusChart.data.find(item => item.name === "Restarting")
          const runningData = ec2StatusChart.data.find(item => item.name === "Running")

          if (restartingData && restartingData.instances > 0) {
            restartingData.instances--
          }
          if (runningData) {
            runningData.instances++
          }
        }

        // Update Resource Distribution chart (same logic for all notifications)
        const resourceDistChart = state.charts.find(chart => chart.heading === "Resource Distribution")
        if (resourceDistChart) {
          const ec2Data = resourceDistChart.data.find(item => item.name === "EC2 Instances")
          if (ec2Data) {
            ec2Data.value++
          }
        }

        // Update count cards (same logic for all notifications)
        const totalActiveResourcesCount = state.counts.find(count => count.heading === "Total Active Resources")
        if (totalActiveResourcesCount) {
          totalActiveResourcesCount.count++
        }

        const runningEC2Count = state.counts.find(count => count.heading === "Running EC2 Instances")
        if (runningEC2Count) {
          runningEC2Count.count++
        }
      } else {
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
  setSelectedRegion
} = dashboardSlice.actions

export default dashboardSlice.reducer
