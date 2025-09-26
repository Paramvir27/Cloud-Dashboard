# Cloud Dashboard

A real-time AWS cloud resource monitoring dashboard built with React and Redux. Displays live metrics for EC2 instances, Lambda functions, S3 storage, and system notifications with interactive charts and real-time updates.

## Quick Start

```bash
npm install
npm run dev
```

## Folder Structure

```
src/
├── components/          # Reusable UI components (Charts, Cards, Toast, etc.)
├── constants/           # Static data files (charts.json, counters.json, notifications.json)
├── hooks/              # Custom React hooks for dashboard initialization
├── layout/             # Layout components for dashboard sections
├── store/              # Redux store and slices for state management
└── views/              # Main page components
```

## Features

- **Real-time Metrics**: Live counters for active resources, EC2 instances, Lambda functions
- **Interactive Charts**: Donut, bar, area, line, and pie charts for data visualization
- **Live Notifications**: Real-time alerts and system notifications
- **Region Selection**: Multi-region AWS resource monitoring
- **Responsive Design**: Mobile-friendly dashboard interface
