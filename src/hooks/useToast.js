import { useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { markNotificationAsRead } from '../store/slices/dashboardSlice'

const useToast = () => {
  const [currentToast, setCurrentToast] = useState(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const dispatch = useDispatch()
  const notifications = useSelector((state) => state.dashboard.notifications)
  const isNotificationPanelOpen = useSelector((state) => state.dashboard.isNotificationPanelOpen)
  const prevNotificationsRef = useRef([])

  // Initialize with current notifications on first render (don't show them as toasts)
  useEffect(() => {
    if (!isInitialized) {
      prevNotificationsRef.current = notifications
      setIsInitialized(true)
      return
    }

    const prevNotifications = prevNotificationsRef.current
    const newNotifications = notifications.filter(notification => 
      !prevNotifications.some(prev => prev.id === notification.id)
    )

    // Show toast for the latest new notification (only one at a time and only when popover is closed)
    if (newNotifications.length > 0 && !isNotificationPanelOpen) {
      const latestNotification = newNotifications[newNotifications.length - 1]
      setCurrentToast({ ...latestNotification, toastId: Date.now() })
    }

    prevNotificationsRef.current = notifications
  }, [notifications, isNotificationPanelOpen, isInitialized])

  // Clear toast when popover opens
  useEffect(() => {
    if (isNotificationPanelOpen && currentToast) {
      setCurrentToast(null)
    }
  }, [isNotificationPanelOpen, currentToast])

  const clearToast = useCallback(() => {
    setCurrentToast(null)
  }, [])

  const dismissToast = useCallback(() => {
    if (currentToast) {
      dispatch(markNotificationAsRead(currentToast.id))
      setCurrentToast(null)
    }
  }, [currentToast, dispatch])

  return {
    currentToast,
    clearToast,
    dismissToast
  }
}

export default useToast