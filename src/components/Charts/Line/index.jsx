import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => {
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
          dataKey="time" 
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
        <Line 
          type="monotone" 
          dataKey="storage" 
          stroke="var(--chart-primary)" 
          strokeWidth={2}
          dot={{ fill: 'var(--chart-primary)', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: 'var(--chart-primary)' }}
          name="Storage (GB)"
        />
        <Line 
          type="monotone" 
          dataKey="requests" 
          stroke="var(--chart-secondary)" 
          strokeWidth={2}
          dot={{ fill: 'var(--chart-secondary)', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: 'var(--chart-secondary)' }}
          name="Requests"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
