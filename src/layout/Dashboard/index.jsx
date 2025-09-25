import React from 'react'
import PieChart from '../../components/Charts/Pie'
import DonutChart from '../../components/Charts/Donut'
import BarChart from '../../components/Charts/Bar'
import Card from '../../components/Card'
import AreaChart from '../../components/Charts/Area'
import LineChart from '../../components/Charts/Line'
import styles from './style.module.css'

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardLayoutWrapper}>
      {/* Example: Bar Chart taking full row */}
      <div className={styles.cardFull}>
        <Card heading="Bar Chart" description="This bar chart takes the full row width">
          <BarChart />
        </Card>
      </div>

      <div className={styles.cardHalf}>
        <Card heading="Area Chart" description="This area chart takes the full row width">
          <AreaChart />
        </Card>
      </div>

      <div className={styles.cardHalf}>
        <Card heading="Area Chart" description="This area chart takes the full row width">
          <AreaChart />
        </Card>
      </div>

      <div className={styles.cardHalf}>
        <Card heading="Line Chart" description="This line chart takes the full row width">
          <LineChart />
        </Card>
      </div>

      <div className={styles.cardHalf}>
        <Card heading="Line Chart" description="This line chart takes the full row width">
          <LineChart />
        </Card>
      </div>
      
      {/* Example: Three charts in one row */}
      <div className={styles.cardThird}>
        <Card heading="Pie Chart" description="This pie chart takes one-third of the row width">
          <PieChart />
        </Card>
      </div>
      <div className={styles.cardThird}>
        <Card heading="Donut Chart" description="This donut chart takes one-third of the row width">
          <DonutChart />
        </Card>
      </div>
      <div className={styles.cardThird}>
        <Card heading="Bar Chart" description="This bar chart takes one-third of the row width">
          <BarChart />
        </Card>
      </div>
      
      {/* Example: Four smaller cards in one row */}
      <div className={styles.cardQuarter}>
        <Card heading="Small Chart 1" description="Quarter width card">
          <PieChart />
        </Card>
      </div>
      <div className={styles.cardQuarter}>
        <Card heading="Small Chart 2" description="Quarter width card">
          <DonutChart />
        </Card>
      </div>
      <div className={styles.cardQuarter}>
        <Card heading="Small Chart 3" description="Quarter width card">
          <PieChart />
        </Card>
      </div>
      <div className={styles.cardQuarter}>
        <Card heading="Small Chart 4" description="Quarter width card">
          <DonutChart />
        </Card>
      </div>
    </div>
  )
}

export default DashboardLayout
