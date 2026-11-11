import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COOKIE_IDIOMA, idiomaDoNavegador } from './lib/idioma';

/**
 * A home em inglês para quem chega com o navegador em outro idioma
 * (11/11). Só a raiz passa por aqui: `/en` é sempre inglês, e as outras
 * páginas são só em português.
 *
 * A escolha feita no seletor PT/EN do topo (o cookie) manda sobre o
 * navegador.
 */
export function proxy(request: NextRequest) {
  const escolhido = request.cookies.get(COOKIE_IDIOMA)?.value;
  const idioma =
    escolhido === 'pt' || escolhido === 'en'
      ? escolhido
      : idiomaDoNavegador(request.headers.get('accept-language'));
  if (idioma === 'en') {
    const destino = request.nextUrl.clone();
    destino.pathname = '/en';
    return NextResponse.redirect(destino, 307);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
