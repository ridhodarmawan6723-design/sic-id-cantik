"use client";

import { useState, useEffect } from "react";

const ctaItems = [
  { title: "Cek ID", description: "Cek ketersediaan ID dengan cepat", icon: "🔍", bg: "from-pink-500 to-rose-500" },
  { title: "Beli ID", description: "Transaksi aman dan mudah", icon: "🛒", bg: "from-purple-500 to-indigo-500" },
  { title: "Hubungi Admin", description: "Konsultasi 24/7 bersama kami", icon: "💬", bg: "from-blue-500 to-cyan-500" }
];

export default function CtaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ctaItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div 
      className="relative overflow-hidden rounded-3xl shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {ctaItems.map((item, index) => (
          <div key={index} className={`min-w-full bg-gradient-to-r ${item.bg} p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-6`}>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">{item.title}</h2>
              <p className="text-lg md:text-xl text-white/80 mb-8">{item.description}</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                {item.title} Sekarang
              </button>
            </div>
            <div className="text-8xl md:text-9xl drop-shadow-2xl animate-bounce-slow">{item.icon}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {ctaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
