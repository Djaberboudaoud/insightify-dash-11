import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { recentActivity } from '@/lib/sampleData';
import { ShoppingCart, UserPlus, Download, Settings } from 'lucide-react';

export function ActivityFeed() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'purchase':
        return <ShoppingCart className="h-4 w-4" />;
      case 'subscription':
        return <UserPlus className="h-4 w-4" />;
      case 'download':
        return <Download className="h-4 w-4" />;
      case 'update':
        return <Settings className="h-4 w-4" />;
      default:
        return <div className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'purchase':
        return 'bg-success/10 text-success';
      case 'subscription':
        return 'bg-primary/10 text-primary';
      case 'download':
        return 'bg-warning/10 text-warning';
      case 'update':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-card to-muted/30 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
              <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs bg-primary/10 text-primary">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm text-foreground">{activity.user}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                  {activity.amount && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {activity.amount}
                    </Badge>
                  )}
                </p>
              </div>
              
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}