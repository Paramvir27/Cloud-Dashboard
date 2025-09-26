import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Bell } from 'lucide-react'
import logo from '../../assets/logo.svg'
import Popover from '../Popover'
import NotificationsList from '../NotificationsList'
import { markAllNotificationsAsRead, setNotificationPanelOpen } from '../../store/slices/dashboardSlice'
import styles from './style.module.css'

const Header = ({ onNotificationOpen }) => {
  const dispatch = useDispatch()
  const notifications = useSelector(state => state.dashboard.notifications)
  const unreadNotifications = notifications.filter(n => !n.isRead)
  const hasUnreadNotifications = unreadNotifications.length > 0

  const handlePopoverOpenChange = (open) => {
    // Update Redux state
    dispatch(setNotificationPanelOpen(open))

    if (open) {
      // Clear any existing toast when notification panel opens
      if (onNotificationOpen) {
        onNotificationOpen()
      }
      
      if (hasUnreadNotifications) {
        dispatch(markAllNotificationsAsRead())
      }
    }
  }

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={logo} alt="Cloud Dashboard Logo" className={styles.logoImage} />
          <h1 className={styles.brandTitle}>Cloud Dashboard</h1>
        </div>
      </div>
      <div className={styles.rightSection}>
        <Popover
          onOpenChange={handlePopoverOpenChange}
          trigger={
            <button 
              className={`${styles.notificationButton} ${hasUnreadNotifications ? styles.hasNotifications : ''}`}
              aria-label="Notifications"
            >
              <Bell size={20} />
              {hasUnreadNotifications && <span className={styles.notificationBadge}>{unreadNotifications.length}</span>}
            </button>
          }
        >
          <NotificationsList />
        </Popover>
      </div>
    </header>
  )
}

export default Header
