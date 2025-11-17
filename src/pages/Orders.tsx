import { useState } from "react";
import { Plus, Search, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const mockOrders = [
  {
    id: "ORD-001",
    patientId: "PAT-001",
    patientName: "John Doe",
    testType: "Complete Blood Count",
    orderDate: "2024-01-15",
    status: "completed",
    hasReport: true,
  },
  {
    id: "ORD-002",
    patientId: "PAT-002",
    patientName: "Jane Smith",
    testType: "Lipid Profile",
    orderDate: "2024-01-15",
    status: "pending",
    hasReport: false,
  },
  {
    id: "ORD-003",
    patientId: "PAT-003",
    patientName: "Mike Johnson",
    testType: "Blood Glucose",
    orderDate: "2024-01-14",
    status: "processing",
    hasReport: false,
  },
  {
    id: "ORD-004",
    patientId: "PAT-001",
    patientName: "John Doe",
    testType: "Thyroid Function",
    orderDate: "2024-01-12",
    status: "completed",
    hasReport: true,
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.patientId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Test Orders</h2>
          <p className="text-muted-foreground">Manage diagnostic test orders</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Order
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by order ID, patient name, or patient ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Test Type</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.patientName}</p>
                      <p className="text-sm text-muted-foreground">{order.patientId}</p>
                    </div>
                  </TableCell>
                  <TableCell>{order.testType}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>
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
                          : "bg-accent text-accent-foreground"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {order.hasReport ? (
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button variant="ghost" size="icon">
                          <Upload className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
