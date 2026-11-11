import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { COOKIE_IDIOMA } from '../../../lib/idioma';

/**
 * O seletor PT/EN do topo (11/11): grava a escolha por um ano e leva à
 * home naquele idioma. A escolha manda sobre o idioma do navegador
 * (`proxy.ts`).
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lingua: string }> },
) {
  const { lingua } = await params;
  const idioma = lingua === 'en' ? 'en' : 'pt';
  const destino = request.nextUrl.clone();
  destino.pathname = idioma === 'en' ? '/en' : '/';
  destino.search = '';
  const resposta = NextResponse.redirect(destino, 307);
  resposta.cookies.set(COOKIE_IDIOMA, idioma, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  });
  return resposta;
}
