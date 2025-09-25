import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', visitors: 4000, conversions: 2400 },
  { name: 'Feb', visitors: 3000, conversions: 1398 },
  { name: 'Mar', visitors: 2000, conversions: 9800 },
  { name: 'Apr', visitors: 2780, conversions: 3908 },
  { name: 'May', visitors: 1890, conversions: 4800 },
  { name: 'Jun', visitors: 2390, conversions: 3800 },
  { name: 'Jul', visitors: 3490, conversions: 4300 },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="var(--border-primary)"
          opacity={0.3}
        />
        <XAxis 
          dataKey="name" 
          axisLine={{ stroke: 'var(--border-primary)' }}
          tickLine={{ stroke: 'var(--border-primary)' }}
          tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
        />
        <YAxis 
          axisLine={{ stroke: 'var(--border-primary)' }}
          tickLine={{ stroke: 'var(--border-primary)' }}
          tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'var(--bg-tertiary)',
            border: '1px solid var(--border-primary)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
          }}
          labelStyle={{ 
            color: 'var(--text-primary)',
            fontWeight: '500'
          }}
          itemStyle={{ 
            color: 'var(--text-primary)',
            fontSize: '14px'
          }}
        />
        <Legend 
          wrapperStyle={{ 
            color: 'var(--text-primary)',
            fontSize: '14px'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="visitors" 
          stroke="var(--chart-primary)" 
          strokeWidth={2}
          dot={{ fill: 'var(--chart-primary)', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: 'var(--chart-primary)' }}
          name="Visitors"
        />
        <Line 
          type="monotone" 
          dataKey="conversions" 
          stroke="var(--chart-secondary)" 
          strokeWidth={2}
          dot={{ fill: 'var(--chart-secondary)', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: 'var(--chart-secondary)' }}
          name="Conversions"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
