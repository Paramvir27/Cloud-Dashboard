import React from 'react'
import Charts from './Charts'
import CountCards from './Count'
import Header from '../../components/Header'
import Skeleton from '../../components/Skeleton'
import useInitializeDashboard from '../../hooks/useInitializeDashboard'
import styles from './style.module.css'

const DashboardLayout = () => {
  const { isLoading } = useInitializeDashboard()

  if (isLoading) {
    return <Skeleton variant="dashboard" />
  }

  return (
    <div className={styles.dashboardWrapper}>
      <Header />
      
      <div className={styles.dashboardContentWrapper}>
        <CountCards />
        <Charts />
      </div>
    </div>
  )
}

export default DashboardLayout
