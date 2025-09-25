import React from 'react'
import BarChart from './Bar'
import AreaChart from './Area'
import LineChart from './Line'
import PieChart from './Pie'
import DonutChart from './Donut'

const components = {
  "bar": BarChart,
  "area": AreaChart,
  "line": LineChart,
  "pie": PieChart,
  "donut": DonutChart
}

const ChartComponent = ({ type, data }) => {
  const Chart = components[type];

  return <Chart data={data} />
}

export default ChartComponent
