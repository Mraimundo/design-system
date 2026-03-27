import { Sidebar } from "@/src/shared/components/sidebar";

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-auto">{children}</main>
    </div>
  );
}
