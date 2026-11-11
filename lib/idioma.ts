/**
 * O idioma do site (11/11): a home em português, em `/`, e em inglês, em
 * `/en`. Decisão do Paulo depois do lançamento, com o app passando a
 * abrir no idioma do aparelho: quem chega de fora do Brasil precisa ler
 * a Trix na língua dele.
 *
 * Só a home tem as duas versões. As páginas de entrada, o blog e as
 * páginas legais seguem só em português.
 */
export type Idioma = 'pt' | 'en';

/** O cookie que guarda a escolha feita no seletor PT/EN do topo. */
export const COOKIE_IDIOMA = 'trix_idioma';

/**
 * O idioma pelo `Accept-Language` do navegador, com a mesma regra do app
 * (`idioma_do_aparelho.dart`): vale o primeiro idioma da lista que a
 * Trix fala, português de qualquer região ou inglês; nenhum dos dois,
 * inglês. Sem cabeçalho, português: robôs de busca costumam chegar sem
 * ele, e a página principal da Trix é a brasileira.
 */
export function idiomaDoNavegador(acceptLanguage: string | null): Idioma {
  if (!acceptLanguage || !acceptLanguage.trim()) return 'pt';
  const tags = acceptLanguage
    .split(',')
    .map((parte, ordem) => {
      const [tag, ...params] = parte.trim().split(';');
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='));
      const peso = q ? Number(q.slice(2)) : 1;
      return { lingua: tag.trim().toLowerCase().split('-')[0], peso: isNaN(peso) ? 0 : peso, ordem };
    })
    .filter((t) => t.lingua && t.lingua !== '*' && t.peso > 0)
    .sort((a, b) => b.peso - a.peso || a.ordem - b.ordem);
  for (const t of tags) {
    if (t.lingua === 'pt' || t.lingua === 'en') return t.lingua;
  }
  return 'en';
}
