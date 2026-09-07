import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Kode pengiriman Telegram asli di sini (biarkan kosong jika tidak ada token)
    // Jika Anda punya kode fetch Telegram di tempat lain, salin ke sini.
    // Jika tidak, kita return sukses dummy agar tidak error.
    console.log('Telegram Notify Data:', data);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
  }
}
