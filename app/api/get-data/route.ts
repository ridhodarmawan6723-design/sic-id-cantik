import { NextResponse } from 'next/server';

export async function GET() {
  const configData = {
    wa_admin: '6283112457611',
    channel_url: 'https://whatsapp.com/channel/0029Vb9tBut0gcfE0pWkwF2Y',
    tiktok_url: 'https://www.tiktok.com/@suka.id_cantik',
    tutorial_url: 'https://vt.tiktok.com/ZSXgUXuPJ/'
  };
  return NextResponse.json(configData);
}
