"use client";

import { useState } from "react";

const initialData = [
  { id: "12333333", price: "Rp 3.000", status: "Tersedia" },
  { id: "12444444", price: "Rp 5.000", status: "Tersedia" },
  { id: "12555555", price: "Rp 10.000", status: "Terjual" },
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
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Daftar ID Cantik</h2>

      <input
        type="text"
        placeholder="Cari ID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-pink-50">
              <th className="px-4 py-3 text-left text-gray-600 font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-gray-600 font-semibold">Harga</th>
              <th className="px-4 py-3 text-left text-gray-600 font-semibold">Status</th>
              <th className="px-4 py-3 text-left text-gray-600 font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-mono text-gray-700">{item.id}</td>
                <td className="px-4 py-3 text-gray-700">{item.price}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Tersedia"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="bg-pink-500 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-600 transition-colors">
                    Beli
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Tidak ada ID yang ditemukan</p>
      )}
    </div>
  );
}
