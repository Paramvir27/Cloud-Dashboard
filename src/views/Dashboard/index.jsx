import React from 'react'
import DashboardLayout from '../../layout/Dashboard';
import styles from './style.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardWrapper}>
      <DashboardLayout />
    </div>
  )
}

export default Dashboard
