import React from 'react'
import styles from './style.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={logo} alt="Cloud Dashboard Logo" className={styles.logoImage} />
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
