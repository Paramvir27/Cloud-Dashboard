import React from 'react'
import { useSelector } from 'react-redux'
import ChartComponent from '../../components/Charts'
import Card from '../../components/Card'
import Count from '../../components/Counters'
import styles from './style.module.css'

const DashboardLayout = () => {
  const { counts, charts } = useSelector((state) => state.dashboard)

  // Size mapping function
  const getSizeClass = (size) => {
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

  return (
    <div className={styles.dashboardLayoutWrapper}>
      {/* Render Count components from Redux */}
      {counts.map((countItem, index) => (
        <div key={`count-${index}`} className={getSizeClass(countItem.size)}>
          <Count 
            count={countItem.count}
            heading={countItem.heading}
            description={countItem.description}
          />
        </div>
      ))}

      {/* Render Chart components from Redux */}
      {charts.map((chartItem, index) => (
        <div key={`chart-${index}`} className={getSizeClass(chartItem.size)}>
          <Card heading={chartItem.heading} description={chartItem.description}>
            <ChartComponent type={chartItem.type} data={chartItem.data} />
          </Card>
        </div>
      ))}
    </div>
  )
}

export default DashboardLayout
