import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Cloud Dashboard',
  isLoading: false,
  counts: [
    {
      heading: "Total Resources",
      description: "Total number of resources across cloud environment",
      count: 15,
      size: "1/4",
    },
    {
      heading: "Running EC2 Instances",
      description: "Number of active EC2 instances currently running",
      count: 4,
      size: "1/4",
    },
    {
      heading: "Active Lambda Functions",
      description: "Total number of deployed Lambda functions",
      count: 7,
      size: "1/4",
    },
    {
      heading: "S3 Storage Used",
      description: "Total storage used across all S3 buckets (in GB)",
      count: 120,
      size: "1/4",
    },
  ],
  charts: [
    {
      heading: "Resource Distribution",
      description: "Breakdown of resources by type",
      type: "donut",
      size: "1/2",
      data: [
        { name: "EC2 Instances", value: 5 },
        { name: "Lambda Functions", value: 7 },
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
        { name: "Restarting", instances: 0 },
        { name: "Failed", instances: 0 },
      ],
    },
    {
      heading: "Overall Resource Usage",
      description: "Average CPU and Memory usage across EC2 instances",
      type: "area",
      size: "1/2",
      data: [
        { name: "Jan", usage: 45 },
        { name: "Feb", usage: 50 },
        { name: "Mar", usage: 55 },
        { name: "Apr", usage: 60 },
        { name: "May", usage: 48 },
        { name: "Jun", usage: 52 },
        { name: "Jul", usage: 58 },
      ],
    },
    {
      heading: "S3 Storage & Requests",
      description: "Storage growth and requests trend over time",
      type: "line",
      size: "1/2",
      data: [
        { name: "Jan", storage: 80, requests: 2400 },
        { name: "Feb", storage: 90, requests: 2600 },
        { name: "Mar", storage: 100, requests: 3000 },
        { name: "Apr", storage: 105, requests: 2800 },
        { name: "May", storage: 110, requests: 3200 },
        { name: "Jun", storage: 115, requests: 3500 },
        { name: "Jul", storage: 120, requests: 4000 },
      ],
    },
    {
      heading: "Lambda Invocation Health",
      description: "Success vs Error invocations across all Lambda functions",
      type: "pie",
      size: "1/2",
      data: [
        { name: "Success Invocations", value: 6800 },
        { name: "Error Invocations", value: 200 },
      ],
    },
  ],
  notifications: []
}

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
