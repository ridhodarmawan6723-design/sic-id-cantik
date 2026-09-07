import Link from "next/link";

export default function Header() {
  return (
    <header className="backdrop-blur-xl bg-white/10 border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-pink-400 tracking-wide">SIC SUKA ID</h1>
          <p className="text-xs text-gray-300">Cantik &amp; Terpercaya</p>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors">Beranda</Link>
          <Link href="/" className="hover:text-pink-400 transition-colors">ID Cantik</Link>
          <Link href="/" className="hover:text-pink-400 transition-colors">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}
