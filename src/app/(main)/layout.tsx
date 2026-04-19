import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* pt-28 clears the fixed floating nav (h-20 + pt-4 top offset) */}
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
    </div>
  );
}
