import { BottomNav } from "@/components/bottom-nav";
import { TopNav } from "@/components/top-nav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="pt-20 md:pt-24 pb-20 md:pb-0">{children}</main>
      <BottomNav />
    </div>
  );
}
