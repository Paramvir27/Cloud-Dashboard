import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 300 },
  { name: 'Other', value: 200 },
];

const COLORS = [
  'var(--chart-primary)',    // Blue
  'var(--chart-secondary)',  // Purple
  'var(--chart-tertiary)',   // Cyan
  'var(--chart-quaternary)', // Green
];

export default function DonutChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="70%"
          paddingAngle={5}
          dataKey="value"
          label={{ fill: 'var(--text-primary)', fontSize: 12 }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
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
      </PieChart>
    </ResponsiveContainer>
  );
}
