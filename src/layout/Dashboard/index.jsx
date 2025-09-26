import React from 'react'
import Charts from './Charts'
import CountCards from './Count'
import Header from '../../components/Header'
import Skeleton from '../../components/Skeleton'
import ToastComponent from '../../components/Toast'
import useInitializeDashboard from '../../hooks/useInitializeDashboard'
import useToast from '../../hooks/useToast'
import styles from './style.module.css'

const DashboardLayout = () => {
  const { isLoading } = useInitializeDashboard()
  const { currentToast, clearToast, dismissToast } = useToast()

  if (isLoading) {
    return <Skeleton variant="dashboard" />
  }

  return (
    <div className={styles.dashboardWrapper}>
      <Header onNotificationOpen={clearToast} />
      
      <div className={styles.dashboardContentWrapper}>
        <CountCards />
        <Charts />
      </div>

      <ToastComponent 
        currentToast={currentToast}
        onDismiss={dismissToast}
        onAutoDismiss={clearToast}
      />
    </div>
  )
}

export default DashboardLayout
