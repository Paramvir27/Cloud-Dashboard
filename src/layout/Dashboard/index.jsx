import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import ChartComponent from '../../components/Charts'
import Card from '../../components/Card'
import Count from '../../components/Counters'
import Skeleton from '../../components/Skeleton'
import { setLoading } from '../../store/slices/dashboardSlice'
import styles from './style.module.css'

const DashboardLayout = () => {
  const dispatch = useDispatch()
  const { counts, charts, isLoading } = useSelector((state) => state.dashboard)

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000)

    return () => clearTimeout(timer)
  }, [dispatch])


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

  if (isLoading) {
    return <Skeleton variant="dashboard" />
  }

  return (
    <div className={styles.dashboardWrapper}>
      <Header />
      
      <div className={styles.dashboardContentWrapper}>
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
    </div>
  )
}

export default DashboardLayout
