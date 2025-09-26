import React from 'react'
import { AlertTriangle, AlertCircle, Info, CheckCircle, X } from 'lucide-react'
import styles from './style.module.css'

const NotificationItem = ({ notification, onDelete }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'error':
        return <AlertCircle size={16} className={styles.iconError} />
      case 'warning':
        return <AlertTriangle size={16} className={styles.iconWarning} />
      case 'success':
        return <CheckCircle size={16} className={styles.iconSuccess} />
      case 'info':
      default:
        return <Info size={16} className={styles.iconInfo} />
    }
  }

  return (
    <div className={`${styles.notificationItem} ${styles[`notification${notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}`]}`}>
      <div className={styles.notificationContent}>
        <div className={styles.iconContainer}>
          {getIcon(notification.type)}
        </div>
        <div className={styles.textContent}>
          <p className={styles.message}>{notification.message}</p>
          <span className={styles.time}>{notification.time}</span>
        </div>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(notification.id)}
        aria-label="Delete notification"
      >
        <X size={14} />
      </button>
    </div>
  )
}

export default NotificationItem
