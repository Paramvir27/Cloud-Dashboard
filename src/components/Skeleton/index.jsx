import React from 'react'
import styles from './style.module.css'

// Individual skeleton components
export const SkeletonBox = ({ width = '100%', height = '20px', className = '' }) => (
  <div 
    className={`${styles.skeletonBox} ${className}`}
    style={{ width, height }}
  />
)

export const SkeletonText = ({ lines = 1, width = '100%' }) => (
  <div className={styles.skeletonTextContainer}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={styles.skeletonBox}
        style={{
          width: index === lines - 1 && lines > 1 ? '70%' : width,
          height: '16px',
          marginBottom: index < lines - 1 ? '8px' : '0'
        }}
      />
    ))}
  </div>
)

// Counter skeleton component
export const SkeletonCounter = () => (
  <div className={styles.skeletonCountWrapper}>
    <div className={styles.skeletonCountLeft}>
      <SkeletonBox width="80%" height="20px" />
      <SkeletonBox width="90%" height="14px" />
    </div>
    <div className={styles.skeletonCountRight}>
      <SkeletonBox width="60px" height="40px" />
    </div>
  </div>
)

// Card skeleton component
export const SkeletonCard = () => (
  <div className={styles.skeletonCardWrapper}>
    <div className={styles.skeletonCardHeader}>
      <SkeletonBox width="60%" height="22px" />
      <SkeletonBox width="80%" height="16px" />
    </div>
    <div className={styles.skeletonCardContent}>
      <SkeletonBox width="100%" height="100%" />
    </div>
  </div>
)

// Dashboard skeleton layout
export const SkeletonDashboard = () => (
  <div className={styles.skeletonDashboardWrapper}>
    <div className={styles.skeletonHeader}>
      <SkeletonBox width="200px" height="32px" />
      <SkeletonBox width="40px" height="40px" className={styles.skeletonRounded} />
    </div>
    
    <div className={styles.skeletonContentWrapper}>
      {/* Counter skeletons */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={`skeleton-counter-${index}`} className={styles.skeletonCardQuarter}>
          <SkeletonCounter />
        </div>
      ))}
      
      {/* Chart skeletons */}
      <div className={styles.skeletonCardHalf}>
        <SkeletonCard />
      </div>
      <div className={styles.skeletonCardHalf}>
        <SkeletonCard />
      </div>
      <div className={styles.skeletonCardFull}>
        <SkeletonCard />
      </div>
      <div className={styles.skeletonCardHalf}>
        <SkeletonCard />
      </div>
      <div className={styles.skeletonCardHalf}>
        <SkeletonCard />
      </div>
    </div>
  </div>
)

// Main skeleton component with variants
const Skeleton = ({ 
  variant = 'dashboard', 
  width = '100%', 
  height = '20px', 
  lines = 1,
  className = '' 
}) => {
  switch (variant) {
    case 'counter':
      return <SkeletonCounter />
    case 'card':
      return <SkeletonCard />
    case 'dashboard':
      return <SkeletonDashboard />
    case 'text':
      return <SkeletonText lines={lines} width={width} />
    case 'box':
    default:
      return <SkeletonBox width={width} height={height} className={className} />
  }
}

export default Skeleton
