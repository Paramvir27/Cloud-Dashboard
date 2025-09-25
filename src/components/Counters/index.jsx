import React from 'react';
import styles from './style.module.css';

const Count = ({ 
  count, 
  heading, 
  description 
}) => {
  const formatCount = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <div className={styles.countWrapper}>
      <div className={styles.countLeft}>
        <h3 className={styles.countHeading}>{heading}</h3>
        <p className={styles.countDescription}>{description}</p>
      </div>
      
      <div className={styles.countRight}>
        <div className={styles.countNumber}>
          {formatCount(count)}
        </div>
      </div>
    </div>
  );
};

export default Count;
