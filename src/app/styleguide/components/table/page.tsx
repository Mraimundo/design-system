import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import { Button } from "@/src/shared/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableStatusBadge,
} from "@/src/shared/components/custom-table";
import { TablePageHeader } from "@/src/modules/components-module/components/table-page-header";

export default function TableShowcase() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "active" as const,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "active" as const,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      status: "pending" as const,
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "User",
      status: "inactive" as const,
    },
  ];

  const orders = [
    {
      id: "ORD-001",
      product: "Premium Plan",
      amount: "$99.00",
      status: "completed" as const,
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      product: "Basic Plan",
      amount: "$29.00",
      status: "processing" as const,
      date: "2024-01-16",
    },
    {
      id: "ORD-003",
      product: "Enterprise",
      amount: "$299.00",
      status: "pending" as const,
      date: "2024-01-17",
    },
    {
      id: "ORD-004",
      product: "Premium Plan",
      amount: "$99.00",
      status: "failed" as const,
      date: "2024-01-18",
    },
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: Record<
      string,
      {
        badge: "success" | "warning" | "error" | "info" | "default";
        label: string;
      }
    > = {
      active: { badge: "success", label: "Active" },
      inactive: { badge: "default", label: "Inactive" },
      pending: { badge: "warning", label: "Pending" },
      completed: { badge: "success", label: "Completed" },
      processing: { badge: "info", label: "Processing" },
      failed: { badge: "error", label: "Failed" },
    };

    const config = statusMap[status] || {
      badge: "default" as const,
      label: status,
    };
    return (
      <TableStatusBadge status={config.badge}>{config.label}</TableStatusBadge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <TablePageHeader />
      <div className="px-8 py-10 max-w-5xl mx-auto space-y-0">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Table</h1>
            <p className="text-muted-foreground">
              Display data in a structured table format with multiple variants
              and features
            </p>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Basic Usage</h2>
          <Card>
            <CardHeader>
              <CardTitle>Simple Table</CardTitle>
              <CardDescription>
                A basic table with header and body rows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Code Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/custom-table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.status}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Variants</h2>

          <Card>
            <CardHeader>
              <CardTitle>Striped Variant</CardTitle>
              <CardDescription>
                Alternating row colors for better readability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table variant="striped">
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell>{order.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bordered Variant</CardTitle>
              <CardDescription>Borders around all cells</CardDescription>
            </CardHeader>
            <CardContent>
              <Table variant="bordered">
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.slice(0, 3).map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compact Size</CardTitle>
              <CardDescription>
                Denser spacing for more data visibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table variant="striped" hoverable>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Large Size</CardTitle>
              <CardDescription>
                More spacious for important data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table size="lg">
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.slice(0, 2).map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">
                        {order.product}
                      </TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-lg font-semibold">
                        {order.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Interactive Features</h2>

          <Card>
            <CardHeader>
              <CardTitle>Hoverable Rows</CardTitle>
              <CardDescription>
                Highlight rows on hover for better UX
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table hoverable variant="striped">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Status Badges</h2>
          <Card>
            <CardHeader>
              <CardTitle>Table Status Badge Component</CardTitle>
              <CardDescription>
                Pre-styled badges for common status values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <TableStatusBadge status="success">Success</TableStatusBadge>
                <TableStatusBadge status="warning">Warning</TableStatusBadge>
                <TableStatusBadge status="error">Error</TableStatusBadge>
                <TableStatusBadge status="info">Info</TableStatusBadge>
                <TableStatusBadge status="default">Default</TableStatusBadge>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status Type</TableHead>
                    <TableHead>Component</TableHead>
                    <TableHead>Use Case</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Success</TableCell>
                    <TableCell>
                      <TableStatusBadge status="success">
                        Active
                      </TableStatusBadge>
                    </TableCell>
                    <TableCell>
                      Completed tasks, active users, successful operations
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Warning</TableCell>
                    <TableCell>
                      <TableStatusBadge status="warning">
                        Pending
                      </TableStatusBadge>
                    </TableCell>
                    <TableCell>
                      Pending approvals, warnings, caution states
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Error</TableCell>
                    <TableCell>
                      <TableStatusBadge status="error">Failed</TableStatusBadge>
                    </TableCell>
                    <TableCell>
                      Errors, failures, inactive/critical states
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Info</TableCell>
                    <TableCell>
                      <TableStatusBadge status="info">
                        Processing
                      </TableStatusBadge>
                    </TableCell>
                    <TableCell>In-progress, informational states</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>

          <Card>
            <CardHeader>
              <CardTitle>Table Props</CardTitle>
            </CardHeader>
            <CardContent>
              <Table variant="bordered">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-37.5">Prop</TableHead>
                    <TableHead className="w-50">Type</TableHead>
                    <TableHead className="w-37.5">Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-sm">variant</TableCell>
                    <TableCell className="font-mono text-sm">
                      "default" | "striped" | "bordered"
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      "default"
                    </TableCell>
                    <TableCell>Visual style variant of the table</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-sm">size</TableCell>
                    <TableCell className="font-mono text-sm">
                      "default" | "sm" | "lg"
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      "default"
                    </TableCell>
                    <TableCell>Size/density of the table cells</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-sm">
                      hoverable
                    </TableCell>
                    <TableCell className="font-mono text-sm">boolean</TableCell>
                    <TableCell className="font-mono text-sm">false</TableCell>
                    <TableCell>Enable hover effect on rows</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-sm">
                      className
                    </TableCell>
                    <TableCell className="font-mono text-sm">string</TableCell>
                    <TableCell className="font-mono text-sm">-</TableCell>
                    <TableCell>Additional CSS classes</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>TableStatusBadge Props</CardTitle>
            </CardHeader>
            <CardContent>
              <Table variant="bordered">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-37.5">Prop</TableHead>
                    <TableHead className="w-50">Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-sm">status</TableCell>
                    <TableCell className="font-mono text-sm">
                      "success" | "warning" | "error" | "info" | "default"
                    </TableCell>
                    <TableCell>
                      Semantic status type that determines color
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-sm">
                      children
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      React.ReactNode
                    </TableCell>
                    <TableCell>Badge label text</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Accessibility</h2>
          <Card>
            <CardHeader>
              <CardTitle>Accessibility Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Uses semantic HTML table elements (thead, tbody, th, td)
                </li>
                <li>Proper scope attributes for header cells</li>
                <li>Keyboard navigable with arrow keys</li>
                <li>Screen reader friendly with proper ARIA attributes</li>
                <li>Sufficient color contrast ratios (WCAG AA compliant)</li>
                <li>Focus indicators on interactive elements</li>
              </ul>

              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-semibold mb-2">Best Practices:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>
                    Always include a TableHeader with descriptive column headers
                  </li>
                  <li>Use TableCaption for table descriptions</li>
                  <li>Provide unique keys for each TableRow</li>
                  <li>
                    Use appropriate status badges for visual + semantic meaning
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Common Use Cases</h2>

          <Card>
            <CardHeader>
              <CardTitle>User Management Table</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`// User list with actions
<Table variant="striped" hoverable>
  <TableHeader>
    <TableRow>
      <TableHead>User</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>
          <div className="flex items-center gap-3">
            <Avatar src={user.avatar} />
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-muted-foreground">{user.email}</div>
            </div>
          </div>
        </TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>
          <TableStatusBadge status={user.isActive ? "success" : "default"}>
            {user.isActive ? "Active" : "Inactive"}
          </TableStatusBadge>
        </TableCell>
        <TableCell>
          <Button variant="ghost" size="sm">Edit</Button>
          <Button variant="ghost" size="sm">Delete</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
