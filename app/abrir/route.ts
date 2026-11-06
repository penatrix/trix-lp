import type { NextRequest } from 'next/server';
import { destinoDoAparelho } from '../../lib/lojas';

// trix.travel/abrir: a porta de todo "Gerar meu roteiro" e "Entrar" do
// site (06/11). No iPhone vai para a App Store, no Android para o Google
// Play, e no computador (e no iPad) para o app na web. Por ser rota, a
// home continua estática: a decisão é tomada aqui, pelo user agent, sem
// o botão trocar de endereço na frente da pessoa.
export async function GET(request: NextRequest) {
  const destino = destinoDoAparelho(
    request.headers.get('user-agent') ?? '',
    request.nextUrl.searchParams.get('caminho'),
  );
  return Response.redirect(destino, 307);
}
