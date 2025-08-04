import { DashboardHeader } from '@/components/DashboardHeader';
import { KPICard } from '@/components/KPICard';
import { RevenueChart } from '@/components/RevenueChart';
import { TrafficChart } from '@/components/TrafficChart';
import { UserGrowthChart } from '@/components/UserGrowthChart';
import { ActivityFeed } from '@/components/ActivityFeed';
import { kpiData } from '@/lib/sampleData';

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-background">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi) => (
            <KPICard
              key={kpi.id}
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              trend={kpi.trend}
              icon={kpi.icon}
              color={kpi.color}
              prefix={kpi.prefix}
              suffix={kpi.suffix}
            />
          ))}
        </div>
        
        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RevenueChart />
          <UserGrowthChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrafficChart />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default Index;
