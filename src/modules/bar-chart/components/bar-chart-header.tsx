"use client";

import { Button } from "@/src/shared/components/ui/button";
import { useState } from "react";

export function BarChartHeader() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-border px-8 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Bar Chart Component
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Complete visual reference for the bar chart component
        </p>
      </div>
      <Button variant="outline" size="sm" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </Button>
    </div>
  );
}
