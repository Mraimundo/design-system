"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/shared/components/ui/chart";
import { cn } from "../lib/utils";

export interface BarChartData {
  [key: string]: string | number;
}

export interface CustomBarChartProps {
  data: BarChartData[];
  indexKey: string;
  categories: string[];
  variant?: "default" | "stacked" | "grouped" | "horizontal";
  size?: "sm" | "md" | "lg" | "full";
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  colors?: string[];
  className?: string;
  title?: string;
  description?: string;
}

export function BarChartComponent({
  data,
  indexKey,
  categories,
  variant = "default",
  size = "md",
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  colors,
  className,
  title,
  description,
}: CustomBarChartProps) {
  // Generate chart config dynamically
  const chartConfig: ChartConfig = categories.reduce((acc, category) => {
    const colorIndex = categories.indexOf(category) % (colors?.length || 5);
    const color = colors?.[colorIndex] || `hsl(var(--chart-${colorIndex + 1}))`;

    acc[category] = {
      label: category,
      color: color,
    };
    return acc;
  }, {} as ChartConfig);

  const sizeClasses = {
    sm: "h-[200px]",
    md: "h-[300px]",
    lg: "h-[400px]",
    full: "h-[500px]",
  };

  const chartContent = (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout={variant === "horizontal" ? "vertical" : "horizontal"}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {showGrid && (
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        )}
        <XAxis
          dataKey={indexKey}
          type={variant === "horizontal" ? "number" : "category"}
          className="text-xs"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={{ stroke: "hsl(var(--border))" }}
          tickLine={{ stroke: "hsl(var(--border))" }}
        />
        <YAxis
          type={variant === "horizontal" ? "category" : "number"}
          className="text-xs"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        {showTooltip && <ChartTooltip content={<ChartTooltipContent />} />}
        {showLegend && <Legend />}
        {categories.map((category, index) => {
          const colorIndex = index % (colors?.length || 5);
          const color = colors?.[colorIndex] || `var(--color-${category})`;

          return (
            <Bar
              key={category}
              dataKey={category}
              fill={color}
              stackId={variant === "stacked" ? "stack" : undefined}
              radius={
                variant === "default" || variant === "grouped"
                  ? [4, 4, 0, 0]
                  : undefined
              }
            />
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );

  if (title || description) {
    return (
      <Card className={cn(className)}>
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <div className={cn(sizeClasses[size])}>
            <ChartContainer config={chartConfig}>{chartContent}</ChartContainer>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn(sizeClasses[size], className)}>
      <ChartContainer config={chartConfig}>{chartContent}</ChartContainer>
    </div>
  );
}

// Simple Bar Chart for quick usage
export function SimpleBarChart({
  data,
  indexKey,
  dataKey,
  color = "hsl(var(--chart-1))",
  className,
}: {
  data: BarChartData[];
  indexKey: string;
  dataKey: string;
  color?: string;
  className?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis
          dataKey={indexKey}
          className="text-xs"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        />
        <YAxis
          className="text-xs"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export { BarChartComponent as BarChart };
