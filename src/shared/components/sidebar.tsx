"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/src/shared/lib/utils";
import { navigation } from "@/src/app/styleguide/nagation";
export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-sidebar fixed top-0 left-0 h-screen overflow-y-auto flex flex-col">
      <div className="px-6 py-5 border-b border-sidebar-border">
        <Link
          href="/styleguide"
          className="flex items-center gap-2 text-sidebar-foreground"
        >
          <span
            className="w-7 h-7 rounded-md flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "var(--primary)" }}
          >
            DS
          </span>
          <span className="text-base font-semibold tracking-tight">
            Design System
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-5 flex flex-col gap-7">
        {navigation.map((section) => (
          <div key={section.title}>
            <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {section.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground">
          v1.0.0 &middot; Prompt 1
        </p>
      </div>
    </aside>
  );
}
