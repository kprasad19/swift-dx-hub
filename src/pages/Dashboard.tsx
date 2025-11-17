import { Users, FileText, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    name: "Total Patients",
    value: "248",
    change: "+12%",
    icon: Users,
    color: "text-primary",
  },
  {
    name: "Pending Orders",
    value: "23",
    change: "-4%",
    icon: Clock,
    color: "text-warning",
  },
  {
    name: "Completed Tests",
    value: "1,247",
    change: "+18%",
    icon: CheckCircle,
    color: "text-success",
  },
  {
    name: "Total Orders",
    value: "1,270",
    change: "+8%",
    icon: FileText,
    color: "text-accent",
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    patient: "John Doe",
    test: "Complete Blood Count",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    patient: "Jane Smith",
    test: "Lipid Profile",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "ORD-003",
    patient: "Mike Johnson",
    test: "Blood Glucose",
    status: "processing",
    date: "2024-01-14",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Overview of your diagnostic lab</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith("+") ? "text-success" : "text-destructive"}>
                  {stat.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium text-foreground">{order.patient}</p>
                  <p className="text-sm text-muted-foreground">{order.test}</p>
                  <p className="text-xs text-muted-foreground">{order.id}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge
                    variant={
                      order.status === "completed"
                        ? "default"
                        : order.status === "pending"
                        ? "secondary"
                        : "outline"
                    }
                    className={
                      order.status === "completed"
                        ? "bg-success text-success-foreground"
                        : order.status === "pending"
                        ? "bg-warning text-warning-foreground"
                        : ""
                    }
                  >
                    {order.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{order.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
