import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
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
            fontSize: '14px',
            lineHeight: '20px'
          }}
          iconType="rect"
        />
        <Area 
          type="monotone" 
          dataKey="usage" 
          stroke="var(--chart-primary)" 
          fill="var(--chart-primary)"
          fillOpacity={0.3}
          name="Usage (%)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
