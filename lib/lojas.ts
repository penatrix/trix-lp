// As lojas, num lugar só (14/10).
//
// O app foi enviado à App Store e ao Google Play em 14/10, com a
// publicação nas mãos do Paulo nas duas: aprovado não entra no ar
// sozinho. Até o lançamento, o site continua mandando para o app na web
// e para a lista de espera. No dia, liga-se a chave abaixo e preenche-se
// o endereço da App Store, e a home, o fecho das páginas e o
// trix.travel/baixar passam a apontar para as lojas.
//
// Ligar antes de o app estar publicado manda gente para uma página que
// a loja responde como inexistente.

/** As duas lojas estão no ar. */
export const LOJAS_NO_AR = false;

/**
 * O endereço da App Store só existe com o id numérico do app (App Store
 * Connect → App Information → Apple ID). Enquanto for nulo, o botão da
 * Apple não aparece, mesmo com a chave ligada.
 */
export const LINK_APP_STORE: string | null = null;

export const LINK_GOOGLE_PLAY =
  'https://play.google.com/store/apps/details?id=travel.trix.app';

export const LINK_APP_WEB = 'https://app.trix.travel';

/** Que loja serve a este navegador, pelo user agent. */
export function lojaDoAparelho(userAgent: string): 'apple' | 'google' | null {
  const ua = userAgent.toLowerCase();
  // iPad com iPadOS se apresenta como Mac; o app é só de iPhone e abre
  // no iPad em modo de compatibilidade, então ele fica com os dois botões.
  if (/iphone|ipod/.test(ua)) return 'apple';
  if (/android/.test(ua)) return 'google';
  return null;
}
