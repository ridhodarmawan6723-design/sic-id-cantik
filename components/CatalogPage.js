"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://wzilzpcxmtosyoibcxfg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-2dGV8jPXxXCAd8ojmdaAw_mFjx6eKm';

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAdminStatus, setCurrentAdminStatus] = useState('online');
  const [currentSort, setCurrentSort] = useState('desc');
  const [activePriceIndex, setActivePriceIndex] = useState(-1);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) throw error;
        setProducts(data || []);
      } catch (e) {
        console.error('Error fetching products:', e);
      }
    };
    fetchProducts();
  }, [supabase]);

  return (
    <div id="catalogPage" className="visible-section fade-section">
      {/* SALIN SEMUA HTML DARI index.html KE SINI (NAV, CAROUSEL, CTA, SEARCH, TAB, PRODUCT GRID, FOOTER) */}
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
        {/* SALIN SEMUA HTML PRODUK, SEARCH, TAB, FOOTER DI SINI */}
      </div>
    </div>
  );
}
