import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Trash2 } from 'lucide-react'
import { removeNotification, clearNotifications } from '../../store/slices/dashboardSlice'
import NotificationItem from '../NotificationItem'
import styles from './style.module.css'

const NotificationsList = () => {
  const notifications = useSelector(state => state.dashboard.notifications)
  const dispatch = useDispatch()

  const handleDeleteNotification = (id) => {
    dispatch(removeNotification(id))
  }

  const handleClearAll = () => {
    dispatch(clearNotifications())
  }

  if (notifications.length === 0) {
    return (
      <div className={styles.notificationsContainer}>
        <div className={styles.header}>
          <h3 className={styles.title}>Notifications</h3>
        </div>
        <div className={styles.emptyState}>
          <p>No notifications</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.notificationsContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Notifications</h3>
        <button 
          className={styles.clearAllButton}
          onClick={handleClearAll}
          aria-label="Clear all notifications"
        >
          <Trash2 size={14} />
          Clear All
        </button>
      </div>
      <div className={styles.notificationsList}>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onDelete={handleDeleteNotification}
          />
        ))}
      </div>
    </div>
  )
}

export default NotificationsList
