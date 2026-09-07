"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://wzilzpcxmtosyoibcxfg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-2dGV8jPXxXCAd8ojmdaAw_mFjx6eKm';

export default function CatalogPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAdminStatus, setCurrentAdminStatus] = useState('online');
  const [currentSort, setCurrentSort] = useState('desc');
  const [activePriceIndex, setActivePriceIndex] = useState(-1);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data || []);
      } catch (e) {
        console.error('Error fetching products:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [supabase]);

  // REUSE 100% HTML DARI index.html (bagian catalogPage)
  return (
    <div id="catalogPage" className="visible-section fade-section">
      {/* SALIN SEMUA HTML dari <nav> sampai <div id="guestToolsContent"> */}
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
        <section className="mt-6">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/60 shadow-2xl">
            {/* SALIN SEMUA CAROUSEL HTML DI SINI */}
          </div>
        </section>

        <div className="cta-banner mt-6 p-4 md:p-5 lg:p-6">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1 space-y-2.5">
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white leading-tight cta-glow-text">
                Dapatkan ID Cantik <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">mulai dari 1K doang</span>.
              </h3>
              <p className="text-zinc-400 text-sm">Admin juga sering bagi-bagi <span className="text-emerald-400 font-bold">ID GRATIS</span>.</p>
              {/* ... SALIN SEMUA HTML CTA BANNER DI SINI ... */}
            </div>
            <div className="w-full lg:w-auto flex-shrink-0 lg:pl-4">
              <a id="ctaJoinChannelBtn" href="#" target="_blank" rel="noopener noreferrer" className="btn-cta-wa block w-full lg:w-auto text-center text-white font-bold py-3 px-6 rounded-xl text-base md:text-lg flex items-center justify-center gap-3 transition-all">
                <i className="fab fa-whatsapp text-2xl"></i> Join Saluran WA Sekarang!
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 mb-6">
          <span className="text-xs text-zinc-500 tracking-[0.2em] font-mono">// UID_STORE.VERIFIED</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2 leading-tight">Pusat Penyedia UID <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">Eksklusif & Terverifikasi Aman</span></h1>
          <p className="text-zinc-400 mt-3 max-w-2xl text-sm md:text-base">Miliki UID langka impian Anda secara legal dengan jaminan keamanan penuh dan pembayaran QRIS instan.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start" id="pageNavigation">
          <button className="page-nav-btn active" data-page="catalog"><i className="fas fa-shopping-cart mr-1.5"></i> 🛒 Katalog UID</button>
          <button className="page-nav-btn" data-page="panduan"><i className="fas fa-book mr-1.5"></i> ℹ️ Panduan Login</button>
          <button className="page-nav-btn" data-page="guest-tools"><i className="fas fa-tools mr-1.5"></i> 🔧 Tools Guest</button>
        </div>

        <div id="catalogContent">
          {/* SALIN SEMUA HTML PRODUK, SEARCH, TAB DI SINI */}
        </div>

        {/* SALIN SEMUA FOOTER HTML DI SINI */}
        <div className="border-t py-8 mt-8" style={{borderColor:'#27272a'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {/* ... SALIN SEMUA FOOTER ... */}
          </div>
        </div>
        <div className="text-center py-4 border-t border-zinc-800/50 space-y-2">
          <p className="whatsapp-channel-text"><i className="fab fa-whatsapp"></i> Gabung Saluran WhatsApp: <a id="channelLinkInline" href="#" target="_blank" rel="noopener noreferrer">SUKA ID CANTIK Channel</a></p>
          <p className="tiktok-text"><i className="fab fa-tiktok"></i> TikTok: <a id="tiktokLinkInline" href="#" target="_blank" rel="noopener noreferrer">@suka.id_cantik</a></p>
        </div>
        <div className="text-center pb-6"><p className="text-xs text-zinc-600">© 2026 SUKA ID CANTIK - Trusted Premium UID Store</p></div>
      </div>
    </div>
  );
}
