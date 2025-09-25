import React from 'react';
import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const COLORS = [
  'var(--chart-primary)',    // Blue
  'var(--chart-secondary)',  // Purple
  'var(--chart-tertiary)',   // Cyan
  'var(--chart-quaternary)', // Green
  'var(--chart-quinary)',    // Orange
  'var(--chart-senary)',     // Red
];

export default function PieChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius="80%"
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
