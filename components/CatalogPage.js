"use client";

export default function CatalogPage() {
  return (
    <div id="catalogPage" className="visible-section fade-section">
      <nav className="border-b border-slate-800/80 bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 bg-zinc-700 rounded-lg flex items-center justify-center shadow-lg shadow-zinc-500/30">
              <span className="text-white font-extrabold text-sm tracking-tight">SIC</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-white font-bold text-xl md:text-2xl tracking-tight">SUKA</span>
              <span className="font-semibold text-xl md:text-2xl tracking-tight glow-text-platinum" style={{color:'#e2e8f0'}}>ID CANTIK</span>
            </div>
          </div>
          <div className="verified-badge flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <span className="text-emerald-400 text-lg leading-none">●</span>
            <span className="text-emerald-300 tracking-wide">VERIFIED STORE</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* SALIN SEMUA HTML DARI index.html KE SINI */}
      </div>
    </div>
  );
}
