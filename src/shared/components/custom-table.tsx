import {
  Table as ShadcnTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/shared/components/ui/table";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface CustomTableProps {
  children: ReactNode;
  variant?: "default" | "striped" | "bordered" | "compact";
  size?: "default" | "sm" | "lg";
  hoverable?: boolean;
  className?: string;
}

export function Table({
  children,
  variant = "default",
  size = "default",
  hoverable = false,
  className,
}: CustomTableProps) {
  return (
    <div className={cn("rounded-md border", className)}>
      <ShadcnTable
        className={cn(
          variant === "striped" && " [&_tbody_tr:nth-child(even)]:bg-muted/50",
          variant === "bordered" && "[&_td]:border-b [&_th]:border-b",
          "[&_th]:py-2 [&_td]:py-2 [&_th]:px-3 [&_td]:px-3",
          size === "sm" && "[&_th]:py-2 [&_td]:py-2 text-sm",
          size === "lg" && "[&_th]:py-4 [&_td]:py-4 text-lg",
          hoverable && "[&_tbody_tr:hover]:bg-muted/50",
        )}
      >
        {children}
      </ShadcnTable>
    </div>
  );
}

interface TableStatusBadgeProps {
  status: "success" | "warning" | "error" | "info" | "default";
  children: ReactNode;
}

export function TableStatusBadge({ status, children }: TableStatusBadgeProps) {
  const variants = {
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning-foreground border-warning/20",
    error: "bg-destructive/10 text-destructive border-destructive/20",
    info: "bg-info/10 text-info border-info/20",
    default: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[status],
      )}
    >
      {children}
    </span>
  );
}

export { TableHeader, TableBody, TableRow, TableHead, TableCell };
