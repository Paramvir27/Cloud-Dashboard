import React from 'react'
import styles from './style.module.css'

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <h1 className={styles.brandTitle}>Cloud Dashboard</h1>
        </div>
      </div>
      <div className={styles.rightSection}>
        {/* Future additions will go here */}
      </div>
    </header>
  )
}

export default Header
