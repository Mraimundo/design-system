import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import { Badge } from "@/src/shared/components/ui/badge";
import {
  BarChart,
  BarChartData,
} from "@/src/shared/components/custom-bar-chart";
import { BarChartHeader } from "@/src/modules/bar-chart/components/bar-chart-header";

export default function BarChartShowcase() {
  const salesData: BarChartData[] = [
    { month: "Jan", sales: 4000, revenue: 2400 },
    { month: "Feb", sales: 3000, revenue: 1398 },
    { month: "Mar", sales: 5000, revenue: 9800 },
    { month: "Apr", sales: 2780, revenue: 3908 },
    { month: "May", sales: 1890, revenue: 4800 },
    { month: "Jun", sales: 2390, revenue: 3800 },
  ];

  const productData: BarChartData[] = [
    { product: "Laptops", quantity: 120, revenue: 120000 },
    { product: "Phones", quantity: 250, revenue: 175000 },
    { product: "Tablets", quantity: 180, revenue: 90000 },
    { product: "Accessories", quantity: 400, revenue: 40000 },
  ];

  const userData: BarChartData[] = [
    { day: "Mon", users: 1200, pageViews: 5300 },
    { day: "Tue", users: 1500, pageViews: 6100 },
    { day: "Wed", users: 1800, pageViews: 7200 },
    { day: "Thu", users: 1400, pageViews: 5800 },
    { day: "Fri", users: 2100, pageViews: 8500 },
    { day: "Sat", users: 900, pageViews: 3200 },
    { day: "Sun", users: 700, pageViews: 2800 },
  ];

  const performanceData: BarChartData[] = [
    { category: "Q1", target: 100, actual: 95 },
    { category: "Q2", target: 120, actual: 130 },
    { category: "Q3", target: 140, actual: 125 },
    { category: "Q4", target: 160, actual: 170 },
  ];

  const customColors = ["#6366F1", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="min-h-screen bg-background">
      <BarChartHeader />

      <div className="px-8 py-10 max-w-7xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Bar Chart</h1>
          <p className="text-muted-foreground">
            Display and compare data across categories with versatile bar chart
            variants
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Basic Usage</h2>
          <Card>
            <CardHeader>
              <CardTitle>Simple Bar Chart</CardTitle>
              <CardDescription>
                Basic bar chart with single data series
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-75">
                <BarChart
                  data={salesData}
                  indexKey="month"
                  categories={["sales"]}
                  variant="default"
                  title="Monthly Sales"
                  description="Sales performance over 6 months"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Code Example</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`import { BarChart } from "@/components/custom-bar-chart";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
];

<BarChart
  data={data}
  indexKey="month"
  categories={["sales"]}
  variant="default"
  title="Monthly Sales"
/>`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Variants</h2>

          <Card>
            <CardHeader>
              <CardTitle>Multiple Categories</CardTitle>
              <CardDescription>
                Compare multiple data series side by side
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-87.5">
                <BarChart
                  data={salesData}
                  indexKey="month"
                  categories={["sales", "revenue"]}
                  variant="grouped"
                  title="Sales vs Revenue"
                  description="Comparing sales volume and revenue"
                  colors={["#6366F1", "#10B981"]}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stacked Bar Chart</CardTitle>
              <CardDescription>
                Show composition and total values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-87.5">
                <BarChart
                  data={userData}
                  indexKey="day"
                  categories={["users", "pageViews"]}
                  variant="stacked"
                  title="User Engagement"
                  description="Stacked view of users and page views"
                  colors={["#6366F1", "#818CF8"]}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horizontal Bar Chart</CardTitle>
              <CardDescription>Better for long category names</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-87.5">
                <BarChart
                  data={productData}
                  indexKey="product"
                  categories={["quantity"]}
                  variant="horizontal"
                  title="Product Sales"
                  description="Quantity sold by product category"
                  colors={["#10B981"]}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Sizes</h2>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Small Size</CardTitle>
                <CardDescription>Compact charts for dashboards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-50">
                  <BarChart
                    data={salesData.slice(0, 3)}
                    indexKey="month"
                    categories={["sales"]}
                    size="sm"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medium Size</CardTitle>
                <CardDescription>
                  Standard size for most use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-75">
                  <BarChart
                    data={salesData}
                    indexKey="month"
                    categories={["sales"]}
                    size="md"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Large Size</CardTitle>
                <CardDescription>
                  Detailed view for presentations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-100">
                  <BarChart
                    data={salesData}
                    indexKey="month"
                    categories={["sales", "revenue"]}
                    size="lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Custom Colors</h2>
          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Using custom color palette</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-87.5">
                <BarChart
                  data={productData}
                  indexKey="product"
                  categories={["quantity", "revenue"]}
                  variant="grouped"
                  colors={customColors}
                  title="Product Performance"
                  description="Using custom brand colors"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Semantic Colors</CardTitle>
              <CardDescription>
                Using CSS variables from design system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge
                  style={{
                    backgroundColor: "hsl(var(--chart-1))",
                    color: "white",
                  }}
                >
                  Chart 1
                </Badge>
                <Badge
                  style={{
                    backgroundColor: "hsl(var(--chart-2))",
                    color: "white",
                  }}
                >
                  Chart 2
                </Badge>
                <Badge
                  style={{
                    backgroundColor: "hsl(var(--chart-3))",
                    color: "white",
                  }}
                >
                  Chart 3
                </Badge>
                <Badge
                  style={{
                    backgroundColor: "hsl(var(--chart-4))",
                    color: "white",
                  }}
                >
                  Chart 4
                </Badge>
                <Badge
                  style={{
                    backgroundColor: "hsl(var(--chart-5))",
                    color: "white",
                  }}
                >
                  Chart 5
                </Badge>
              </div>
              <div className="h-[75">
                <BarChart
                  data={performanceData}
                  indexKey="category"
                  categories={["target", "actual"]}
                  variant="grouped"
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Features</h2>

          <Card>
            <CardHeader>
              <CardTitle>With Grid</CardTitle>
              <CardDescription>
                Show grid lines for better readability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-75">
                <BarChart
                  data={salesData}
                  indexKey="month"
                  categories={["sales"]}
                  showGrid={true}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Without Grid</CardTitle>
              <CardDescription>Clean minimal appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-75">
                <BarChart
                  data={salesData}
                  indexKey="month"
                  categories={["sales"]}
                  showGrid={false}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Tooltips</CardTitle>
              <CardDescription>
                Hover over bars to see detailed values
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-75">
                <BarChart
                  data={userData}
                  indexKey="day"
                  categories={["users", "pageViews"]}
                  showTooltip={true}
                  showLegend={true}
                  title="Weekly Analytics"
                  description="Hover to see exact values"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Real-world Examples</h2>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Dashboard</CardTitle>
              <CardDescription>Multi-metric business dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-100">
                <BarChart
                  data={salesData}
                  indexKey="month"
                  categories={["sales", "revenue"]}
                  variant="stacked"
                  size="lg"
                  colors={["#6366F1", "#10B981"]}
                  title="Q1-Q2 Performance"
                  description="Total revenue breakdown by month"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Target vs Actual</CardTitle>
              <CardDescription>
                Performance tracking against goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-87.5">
                <BarChart
                  data={performanceData}
                  indexKey="category"
                  categories={["target", "actual"]}
                  variant="grouped"
                  colors={["hsl(var(--muted))", "hsl(var(--success))"]}
                  title="Quarterly Goals"
                  description="Comparing targets with actual performance"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">API Reference</h2>

          <Card>
            <CardHeader>
              <CardTitle>BarChart Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 font-semibold">
                        Prop
                      </th>
                      <th className="text-left py-2 px-3 font-semibold">
                        Type
                      </th>
                      <th className="text-left py-2 px-3 font-semibold">
                        Default
                      </th>
                      <th className="text-left py-2 px-3 font-semibold">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">data</td>
                      <td className="py-2 px-3 font-mono">BarChartData[]</td>
                      <td className="py-2 px-3 font-mono">-</td>
                      <td className="py-2 px-3">Array of data objects</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">indexKey</td>
                      <td className="py-2 px-3 font-mono">string</td>
                      <td className="py-2 px-3 font-mono">-</td>
                      <td className="py-2 px-3">Key for x-axis labels</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">categories</td>
                      <td className="py-2 px-3 font-mono">string[]</td>
                      <td className="py-2 px-3 font-mono">-</td>
                      <td className="py-2 px-3">Keys for data series</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">variant</td>
                      <td className="py-2 px-3 font-mono">
                        "default" | "stacked" | "grouped" | "horizontal"
                      </td>
                      <td className="py-2 px-3 font-mono">"default"</td>
                      <td className="py-2 px-3">Chart layout variant</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">size</td>
                      <td className="py-2 px-3 font-mono">
                        "sm" | "md" | "lg" | "full"
                      </td>
                      <td className="py-2 px-3 font-mono">"md"</td>
                      <td className="py-2 px-3">Chart height size</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">showGrid</td>
                      <td className="py-2 px-3 font-mono">boolean</td>
                      <td className="py-2 px-3 font-mono">true</td>
                      <td className="py-2 px-3">Show grid lines</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">showLegend</td>
                      <td className="py-2 px-3 font-mono">boolean</td>
                      <td className="py-2 px-3 font-mono">true</td>
                      <td className="py-2 px-3">Show legend</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">showTooltip</td>
                      <td className="py-2 px-3 font-mono">boolean</td>
                      <td className="py-2 px-3 font-mono">true</td>
                      <td className="py-2 px-3">Show tooltips on hover</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">colors</td>
                      <td className="py-2 px-3 font-mono">string[]</td>
                      <td className="py-2 px-3 font-mono">-</td>
                      <td className="py-2 px-3">Custom color array</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 px-3 font-mono">title</td>
                      <td className="py-2 px-3 font-mono">string</td>
                      <td className="py-2 px-3 font-mono">-</td>
                      <td className="py-2 px-3">Chart title</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono">description</td>
                      <td className="py-2 px-3 font-mono">string</td>
                      <td className="py-2 px-3 font-mono">-</td>
                      <td className="py-2 px-3">Chart description</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                <li>Semantic HTML structure with proper ARIA labels</li>
                <li>Keyboard navigable chart elements</li>
                <li>Screen reader friendly tooltips</li>
                <li>Sufficient color contrast ratios (WCAG AA compliant)</li>
                <li>Focus indicators on interactive elements</li>
                <li>Descriptive titles and descriptions for context</li>
              </ul>

              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-semibold mb-2">Best Practices:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Always provide meaningful titles and descriptions</li>
                  <li>Use high contrast colors for better visibility</li>
                  <li>Include data labels for critical values</li>
                  <li>Ensure tooltips are descriptive and informative</li>
                  <li>Test with screen readers for accessibility</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Common Use Cases</h2>

          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`// Multi-metric sales dashboard
<BarChart
  data={salesData}
  indexKey="month"
  categories={["revenue", "profit", "expenses"]}
  variant="grouped"
  size="lg"
  colors={["#6366F1", "#10B981", "#EF4444"]}
  title="Financial Performance"
  description="Monthly revenue, profit, and expenses"
  showGrid={true}
  showLegend={true}
/>`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Growth Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                <code>{`// User growth over time
<BarChart
  data={userData}
  indexKey="month"
  categories={["newUsers", "activeUsers"]}
  variant="stacked"
  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
  title="User Growth"
  description="New and active users per month"
/>`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
