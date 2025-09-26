import styles from './style.module.css'

// Helper function to get CSS class based on size
export const getSizeClass = (size) => {
  switch (size) {
    case '1':
      return styles.cardFull
    case '1/2':
      return styles.cardHalf
    case '1/3':
      return styles.cardThird
    case '1/4':
      return styles.cardQuarter
    default:
      return styles.cardFull
  }
}
