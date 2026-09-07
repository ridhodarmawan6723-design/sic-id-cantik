"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://wzilzpcxmtosyoibcxfg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-2dGV8jPXxXCAd8ojmdaAw_mFjx6eKm';

export default function PaymentPage() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLockedByMe, setIsLockedByMe] = useState(false);
  const [lockDeadline, setLockDeadline] = useState(null);
  const [currentTotalAmount, setCurrentTotalAmount] = useState(0);
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [isWaitingVerification, setIsWaitingVerification] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return (
    <div id="paymentPage" className="fade-section min-h-[70vh] flex items-center justify-center py-10">
      <div className="w-full max-w-lg bg-zinc-900/80 backdrop-blur-2xl border border-zinc-700/60 rounded-3xl shadow-2xl p-6 md:p-8 relative">
        {/* SALIN SEMUA HTML PAYMENT DARI index.html KE SINI */}
      </div>
    </div>
  );
}
