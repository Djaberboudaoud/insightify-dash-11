import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  icon: string;
  color: string;
  prefix?: string;
  suffix?: string;
}

export function KPICard({ title, value, change, trend, icon, color, prefix = '', suffix = '' }: KPICardProps) {
  const IconComponent = (Icons as any)[icon] as LucideIcon;
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  
  const formatValue = (val: number) => {
    if (val >= 1000000) {
      return `${(val / 1000000).toFixed(1)}M`;
    }
    if (val >= 1000) {
      return `${(val / 1000).toFixed(1)}K`;
    }
    return val.toLocaleString();
  };

  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-muted/30 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">
              {prefix}{formatValue(value)}{suffix}
            </p>
          </div>
          <div className={cn(
            "h-12 w-12 rounded-xl flex items-center justify-center",
            color === 'primary' && "bg-primary/10 text-primary",
            color === 'success' && "bg-success/10 text-success",
            color === 'warning' && "bg-warning/10 text-warning",
            color === 'metric-positive' && "bg-metric-positive/10 text-metric-positive"
          )}>
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        
        <div className="mt-4 flex items-center gap-2">
          <div className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
            trend === 'up' ? "bg-metric-positive/10 text-metric-positive" : "bg-metric-negative/10 text-metric-negative"
          )}>
            <TrendIcon className="h-3 w-3" />
            {Math.abs(change)}%
          </div>
          <span className="text-sm text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}