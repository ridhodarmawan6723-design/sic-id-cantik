import Header from "@/components/Header";
import CtaCarousel from "@/components/CtaCarousel";
import CtaSingle from "@/components/CtaSingle";
import IdTable from "@/components/IdTable";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <CtaCarousel />
        <div className="mt-8">
          <CtaSingle />
        </div>
        <div className="mt-12">
          <IdTable />
        </div>
      </div>
    </main>
  );
}
