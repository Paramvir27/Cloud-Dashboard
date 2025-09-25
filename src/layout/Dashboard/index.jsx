import React from 'react'
import PieChart from '../../components/Charts/Pie'
import DonutChart from '../../components/Charts/Donut'
import BarChart from '../../components/Charts/Bar'
import AreaChart from '../../components/Charts/Area'
import LineChart from '../../components/Charts/Line'
import Card from '../../components/Card'
import Count from '../../components/Counters'
import styles from './style.module.css'

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardLayoutWrapper}>
      {/* Example: Count components in one row */}
      <div className={styles.cardQuarter}>
        <Count 
          count={12547}
          heading="Total Users"
          description="Active users registered on the platform"
        />
      </div>
      <div className={styles.cardQuarter}>
        <Count 
          count={8924}
          heading="Revenue"
          description="Total revenue generated this month"
        />
      </div>
      <div className={styles.cardQuarter}>
        <Count 
          count={456}
          heading="Orders"
          description="New orders placed today"
        />
      </div>
      <div className={styles.cardQuarter}>
        <Count 
          count={95.8}
          heading="Success Rate"
          description="System uptime percentage"
        />
      </div>

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
