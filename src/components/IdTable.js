"use client";

import { useState } from "react";

const initialData = [
  { id: "12333333", price: "Rp 3.000", status: "Tersedia" },
  { id: "12444444", price: "Rp 5.000", status: "Tersedia" },
  { id: "12555555", price: "Rp 10.000", status: "Terjual" }
];

export default function IdTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data] = useState(initialData);

  const filteredData = data.filter(
    (item) =>
      item.id.includes(searchTerm) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-white">Daftar ID Cantik</h2>
        <input
          type="text"
          placeholder="🔍 Cari ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20 text-gray-300">
              <th className="px-4 py-4 font-semibold">ID</th>
              <th className="px-4 py-4 font-semibold">Harga</th>
              <th className="px-4 py-4 font-semibold">Status</th>
              <th className="px-4 py-4 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="px-4 py-4 font-mono text-pink-400">{item.id}</td>
                <td className="px-4 py-4 text-white">{item.price}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    item.status === "Tersedia" 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Beli
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-400 mt-6">Tidak ada ID yang ditemukan</p>
      )}
    </div>
  );
}
