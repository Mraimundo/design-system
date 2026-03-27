// app/styleguide/navigation.ts
// Manage styleguide sidebar navigation here.
// Prompt 2 will append component entries to the Components section.

export interface NavItem {
  name: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [{ name: "Design Tokens", href: "/styleguide" }],
  },
  {
    title: "Components",
    items: [
      // Components added by Prompt 2 will appear here.
      // Example:
      // { name: "Button", href: "/styleguide/components/button" },
      // { name: "Card",   href: "/styleguide/components/card" },
      { name: "Table", href: "/styleguide/components/table" },
      { name: "Bar Chart", href: "/styleguide/components/bar-chart" },
    ],
  },
];
