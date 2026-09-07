"use client";

import { useState, useEffect } from "react";

const ctaItems = [
  {
    title: "Cek ID",
    description: "Cek ketersediaan ID Cantik",
    icon: "🔍",
    bg: "from-pink-500 to-rose-500",
  },
  {
    title: "Beli ID",
    description: "Beli ID Cantik langsung jadi",
    icon: "🛒",
    bg: "from-purple-500 to-pink-500",
  },
  {
    title: "Hubungi Admin",
    description: "Konsultasi dengan admin kami",
    icon: "💬",
    bg: "from-rose-500 to-red-500",
  },
];

export default function CtaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ctaItems.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {ctaItems.map((item, index) => (
          <div
            key={index}
            className={`min-w-full bg-gradient-to-r ${item.bg} p-8 text-white`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="text-white/90">{item.description}</p>
              </div>
              <div className="text-5xl">{item.icon}</div>
            </div>
            <button className="mt-4 bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-colors">
              {item.title}
            </button>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {ctaItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
