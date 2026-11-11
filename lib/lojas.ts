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
// a loja responde como inexistente. Ligada em 03/11, no lançamento.

/** As duas lojas estão no ar. */
export const LOJAS_NO_AR = true;

/**
 * O endereço da App Store sai do id numérico do app (App Store Connect →
 * App Information → Apple ID: 6817871137, 27/10). Enquanto for nulo, o
 * botão da Apple não aparece, mesmo com a chave ligada.
 *
 * Sem o país no endereço desde 11/11: com `/br/`, quem tem conta da Apple
 * de outro país caía na loja brasileira. Sem ele, a Apple abre a loja de
 * quem toca.
 */
export const LINK_APP_STORE: string | null =
  'https://apps.apple.com/app/id6817871137';

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

/**
 * Para onde vai quem toca em "Gerar meu roteiro" ou "Entrar" (06/11,
 * decisão do Paulo): no celular, só as lojas, porque o app nativo é a
 * experiência certa ali; no computador e no iPad, o app na web.
 *
 * `caminho` é um caminho do app na web ("/inspiracao?chave=x"). Só vale
 * começando por uma barra e sem "//", para o /abrir não virar
 * redirecionamento aberto para qualquer site.
 */
export function destinoDoAparelho(userAgent: string, caminho?: string | null): string {
  if (LOJAS_NO_AR) {
    const loja = lojaDoAparelho(userAgent);
    if (loja === 'apple' && LINK_APP_STORE) return LINK_APP_STORE;
    if (loja === 'google') return LINK_GOOGLE_PLAY;
  }
  const seguro = caminho && /^\/(?!\/)[^\\\s]*$/.test(caminho) ? caminho : '';
  return LINK_APP_WEB + seguro;
}

/** O endereço que o site usa para mandar alguém ao app. */
export function linkParaOApp(caminho?: string): string {
  return caminho ? `/abrir?caminho=${encodeURIComponent(caminho)}` : '/abrir';
}
