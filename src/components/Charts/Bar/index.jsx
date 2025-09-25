import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const BarChartComponent = ({ data }) => {
  // Define colors for each bar using CSS variables: blue, grey, orange, red
  const barColors = [
    'var(--chart-primary)',      // Blue for first bar
    'var(--text-muted)',   // Grey for second bar  
    'var(--chart-quinary)',      // Orange for third bar
    'var(--error)'         // Red for fourth bar
  ];

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
        <Bar
          dataKey="instances"
          name="Instances"
          radius={[4, 4, 0, 0]}
        >
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
