import React from 'react'
import styles from './style.module.css';

const Card = ({ heading, description, children }) => {
  return (
    <div className={styles.cardWrapper}>
      <h3 className={styles.cardHeading}>{heading}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  )
}

export default Card
