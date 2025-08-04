// Sample data for the analytics dashboard
export const kpiData = [
  {
    id: 'total-users',
    title: 'Total Users',
    value: 24187,
    change: 12.5,
    trend: 'up' as const,
    icon: 'Users',
    color: 'primary' as const
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: 98750,
    change: 8.2,
    trend: 'up' as const,
    icon: 'DollarSign',
    color: 'success' as const,
    prefix: '$'
  },
  {
    id: 'conversion-rate',
    title: 'Conversion Rate',
    value: 3.45,
    change: -2.1,
    trend: 'down' as const,
    icon: 'TrendingUp',
    color: 'warning' as const,
    suffix: '%'
  },
  {
    id: 'bounce-rate',
    title: 'Bounce Rate',
    value: 42.3,
    change: -5.7,
    trend: 'down' as const,
    icon: 'Activity',
    color: 'metric-positive' as const,
    suffix: '%'
  }
];

export const chartData = {
  revenue: [
    { month: 'Jan', value: 65000, target: 60000 },
    { month: 'Feb', value: 72000, target: 65000 },
    { month: 'Mar', value: 68000, target: 70000 },
    { month: 'Apr', value: 85000, target: 75000 },
    { month: 'May', value: 91000, target: 80000 },
    { month: 'Jun', value: 98750, target: 85000 }
  ],
  userGrowth: [
    { month: 'Jan', users: 18500 },
    { month: 'Feb', users: 19200 },
    { month: 'Mar', users: 20100 },
    { month: 'Apr', users: 21800 },
    { month: 'May', users: 23200 },
    { month: 'Jun', users: 24187 }
  ],
  trafficSources: [
    { name: 'Organic Search', value: 45, color: '#3B82F6' },
    { name: 'Direct', value: 25, color: '#10B981' },
    { name: 'Social Media', value: 18, color: '#F59E0B' },
    { name: 'Email', value: 8, color: '#EF4444' },
    { name: 'Referral', value: 4, color: '#8B5CF6' }
  ],
  dailyActivity: [
    { time: '00:00', views: 120 },
    { time: '03:00', views: 80 },
    { time: '06:00', views: 200 },
    { time: '09:00', views: 450 },
    { time: '12:00', views: 380 },
    { time: '15:00', views: 420 },
    { time: '18:00', views: 350 },
    { time: '21:00', views: 280 }
  ]
};

export const recentActivity = [
  {
    id: 1,
    user: 'John Smith',
    action: 'Made a purchase',
    amount: '$249.99',
    time: '2 minutes ago',
    type: 'purchase'
  },
  {
    id: 2,
    user: 'Sarah Johnson',
    action: 'Signed up for premium',
    amount: '$29.99',
    time: '5 minutes ago',
    type: 'subscription'
  },
  {
    id: 3,
    user: 'Mike Chen',
    action: 'Downloaded report',
    amount: '',
    time: '8 minutes ago',
    type: 'download'
  },
  {
    id: 4,
    user: 'Emma Wilson',
    action: 'Updated profile',
    amount: '',
    time: '12 minutes ago',
    type: 'update'
  }
];