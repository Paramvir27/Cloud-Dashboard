import React from 'react'
import { useSelector } from 'react-redux'
import ChartComponent from '../../components/Charts'
import Card from '../../components/Card'
import { getSizeClass } from './helper'

const Charts = React.memo(() => {
  const charts = useSelector((state) => state.dashboard.charts)

  return (
    <>
      {charts.map((chartItem, index) => (
        <div key={`chart-${index}`} className={getSizeClass(chartItem.size)}>
          <Card heading={chartItem.heading} description={chartItem.description}>
            <ChartComponent type={chartItem.type} data={chartItem.data} />
          </Card>
        </div>
      ))}
    </>
  )
})

Charts.displayName = 'Charts'

export default Charts
