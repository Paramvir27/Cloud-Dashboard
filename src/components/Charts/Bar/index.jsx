import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 20,
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
        <Bar 
          dataKey="sales" 
          stackId="a"
          fill="var(--chart-primary)"
          name="Sales"
          radius={[0, 0, 0, 0]}
        />
        <Bar 
          dataKey="revenue" 
          stackId="a"
          fill="var(--chart-quaternary)"
          name="Revenue"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
