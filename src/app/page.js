import Header from "@/components/Header";
import CtaCarousel from "@/components/CtaCarousel";
import CtaSingle from "@/components/CtaSingle";
import IdTable from "@/components/IdTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Header />
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-pink-400 font-semibold tracking-widest uppercase text-sm mb-2">Platform ID Terpercaya</p>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-4">
            SIC SUKA ID CANTIK
          </h1>
        </div>

        <CtaCarousel />
        
        <div className="mt-10">
          <CtaSingle />
        </div>
        
        <div className="mt-16">
          <IdTable />
        </div>
      </div>
      
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm">
        © 2024 SIC SUKA ID CANTIK. All rights reserved.
      </footer>
    </main>
  );
}
