"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [configData, setConfigData] = useState<any>(null);

  useEffect(() => {
    // REUSE 100% LOGIKA DARI index.html (successPage)
  }, []);

  // REUSE 100% HTML DARI index.html (bagian successPage)
  return (
    <div id="successPage" className="fade-section min-h-[70vh] flex items-center justify-center py-10 hidden opacity-0">
      <div className="w-full max-w-lg bg-zinc-900/80 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl shadow-2xl p-6 md:p-8 relative" id="successContent">
        {/* SALIN SEMUA HTML SUKSES DI SINI */}
        <div className="text-center mb-4">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-check-circle text-emerald-400 text-4xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-white">✅ Pembayaran Berhasil Diverifikasi</h2>
          <p className="text-zinc-400 text-sm">Pembayaran Anda telah berhasil diverifikasi oleh admin.</p>
        </div>
        {/* ... SALIN SEMUA HTML DETAIL SUKSES DI SINI ... */}
      </div>
    </div>
  );
}
