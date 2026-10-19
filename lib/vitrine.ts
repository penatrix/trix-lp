/**
 * Os roteiros-modelo da vitrine, os mesmos oito da Home do app.
 *
 * A fonte é `lib/pages/inicio/roteiros_modelo.dart`, no repositório do
 * app: cada ficha resume um roteiro gerado de verdade em 15/10 (trips
 * 425 a 432), para 2 pessoas, sem data e sem origem. **O custo é por
 * pessoa e sem passagem**, como lá. Trocou uma ficha no app, troque aqui:
 * uma vitrine com números diferentes nos dois lugares parece chute.
 *
 * "Usar este roteiro" abre a ficha no app (`/inspiracao?chave=`), que
 * funciona sem conta e leva à criação com cidades, dias e vibes postos.
 */
export type Trecho = { cidade: string; dias: number; chegada?: string };

export type RoteiroModelo = {
  chave: string;
  titulo: string;
  lugar: string;
  frase: string;
  custoPorPessoa: number;
  trajeto: Trecho[];
  foto: { id: string; ixid: string; cor: string; fotografo: string };
};

export function urlDaFoto(f: RoteiroModelo['foto'], largura = 800) {
  return (
    `https://images.unsplash.com/${f.id}?crop=entropy&cs=tinysrgb&fit=max` +
    `&fm=jpg&ixid=${f.ixid}&ixlib=rb-4.1.0&q=80&w=${largura}`
  );
}

export function urlDaFicha(chave: string) {
  return `https://app.trix.travel/inspiracao?chave=${chave}`;
}

export function totalDeDias(r: RoteiroModelo) {
  return r.trajeto.reduce((soma, t) => soma + t.dias, 0);
}

/** "R$ 8.000", como o app escreve. */
export function emReais(valor: number) {
  return `R$ ${valor.toLocaleString('pt-BR')}`;
}

export const ROTEIROS_MODELO: RoteiroModelo[] = [
  {
    chave: 'portugal',
    titulo: 'Lisboa, Sintra e Porto',
    lugar: 'Portugal',
    frase:
      'Quatro dias em Lisboa, Sintra a 40 min de trem e três dias no Porto, entre a Ribeira e as caves.',
    custoPorPessoa: 8000,
    trajeto: [
      { cidade: 'Lisboa', dias: 4 },
      { cidade: 'Sintra', dias: 1, chegada: 'trem · 40 min' },
      { cidade: 'Porto', dias: 3, chegada: 'trem · 3h30' },
    ],
    foto: {
      id: 'photo-1509870449717-5609536a5393',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxN3x8TGlzYm9uJTIwUG9ydHVnYWx8ZW58MXwwfHx8MTc5MTM3NzQ5OXww',
      cor: '#D9D9C0',
      fotografo: 'Clifford',
    },
  },
  {
    chave: 'italia',
    titulo: 'Roma, Florença e Veneza',
    lugar: 'Itália',
    frase:
      'Quatro dias em Roma, trem rápido de 1h35 até Florença e 2h15 até Veneza, com Vaticano, Uffizi e Accademia de hora marcada.',
    custoPorPessoa: 13200,
    trajeto: [
      { cidade: 'Roma', dias: 4 },
      { cidade: 'Florença', dias: 3, chegada: 'trem · 1h35' },
      { cidade: 'Veneza', dias: 2, chegada: 'trem · 2h15' },
    ],
    foto: {
      id: 'photo-1529154166925-574a0236a4f4',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHw1fHxSb21lJTIwSXRhbHl8ZW58MXwwfHx8MTc5MjA2ODA5MHww',
      cor: '#8C7359',
      fotografo: 'Chris Czermak',
    },
  },
  {
    chave: 'espanha',
    titulo: 'Madri, Sevilha, Córdoba e Granada',
    lugar: 'Espanha',
    frase:
      'Dois dias em Madri e a Andaluzia de trem: Sevilha a 2h40, Córdoba a 45 min e Granada a 1h40, com a Alhambra de ingresso marcado.',
    custoPorPessoa: 7000,
    trajeto: [
      { cidade: 'Madri', dias: 2 },
      { cidade: 'Sevilha', dias: 3, chegada: 'trem · 2h40' },
      { cidade: 'Córdoba', dias: 1, chegada: 'trem · 45 min' },
      { cidade: 'Granada', dias: 2, chegada: 'trem · 1h40' },
    ],
    foto: {
      id: 'photo-1516477001775-6b4df23d3ddd',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxfHxNYWRyaSUyMFNwYWlufGVufDF8MHx8fDE3OTIwNjgwOTF8MA',
      cor: '#40738C',
      fotografo: 'William Carletti',
    },
  },
  {
    chave: 'franca',
    titulo: 'Paris e o Vale do Loire',
    lugar: 'França',
    frase:
      'Cinco dias de Paris sem pressa, com Septime e Epicure, e dois no Loire, a 2h de trem, entre castelos e caves.',
    custoPorPessoa: 29300,
    trajeto: [
      { cidade: 'Paris', dias: 5 },
      { cidade: 'Amboise', dias: 2, chegada: 'trem · 2h' },
    ],
    foto: {
      id: 'photo-1499856871958-5b9627545d1a',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMEZyYW5jZXxlbnwxfDB8fHwxNzkyMDY4MDkwfDA',
      cor: '#8C8CA6',
      fotografo: 'Léonard Cotte',
    },
  },
  {
    chave: 'argentina',
    titulo: 'Buenos Aires e Mendoza',
    lugar: 'Argentina',
    frase:
      'Quatro dias em Buenos Aires e três entre as bodegas de Mendoza, a um voo de cerca de 2h.',
    custoPorPessoa: 12800,
    trajeto: [
      { cidade: 'Buenos Aires', dias: 4 },
      { cidade: 'Mendoza', dias: 3, chegada: 'voo · cerca de 2h' },
    ],
    foto: {
      id: 'photo-1528392175875-4ce3ab32663c',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxMXx8QnVlbm9zJTIwQWlyZXMlMjBBcmdlbnRpbmF8ZW58MXwwfHx8MTc5MjA2ODA5MXww',
      cor: '#C0C0D9',
      fotografo: 'Andrea Leopardi',
    },
  },
  {
    chave: 'europa_central',
    titulo: 'Praga, Viena e Budapeste',
    lugar: 'Europa Central',
    frase:
      'Três capitais de trem, três dias em cada: 4h30 de Praga a Viena e 2h45 até Budapeste, para quem quer ver tudo.',
    custoPorPessoa: 11800,
    trajeto: [
      { cidade: 'Praga', dias: 3 },
      { cidade: 'Viena', dias: 3, chegada: 'trem · 4h30' },
      { cidade: 'Budapeste', dias: 3, chegada: 'trem · 2h45' },
    ],
    foto: {
      id: 'photo-1521920592574-49e0b121c964',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxMHx8UHJhZ3VlJTIwQ3plY2hpYXxlbnwxfDB8fHwxNzkyMDY4MDkxfDA',
      cor: '#260C0C',
      fotografo: 'Jonathan Francisca',
    },
  },
  {
    chave: 'serra_gaucha',
    titulo: 'Gramado e Bento Gonçalves',
    lugar: 'Serra Gaúcha',
    frase:
      'Três dias em Gramado e dois no Vale dos Vinhedos, a 2h de carro, com vinícolas de visita marcada.',
    custoPorPessoa: 6000,
    trajeto: [
      { cidade: 'Gramado', dias: 3 },
      { cidade: 'Bento Gonçalves', dias: 2, chegada: 'carro · 2h' },
    ],
    foto: {
      id: 'photo-1668717342589-722a71ddb579',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxfHxHcmFtYWRvJTIwQnJhemlsfGVufDF8MHx8fDE3OTIwNjgwOTF8MA',
      cor: '#F3F3F3',
      fotografo: 'Edson Junior',
    },
  },
  {
    chave: 'alagoas',
    titulo: 'Maceió, Milagres e Maragogi',
    lugar: 'Alagoas',
    frase:
      'Dois dias em Maceió, a Rota Ecológica até Milagres e as galés de Maragogi, cada passeio na hora da maré baixa.',
    custoPorPessoa: 4000,
    trajeto: [
      { cidade: 'Maceió', dias: 2 },
      { cidade: 'São Miguel dos Milagres', dias: 2, chegada: 'carro · 2h' },
      { cidade: 'Maragogi', dias: 2, chegada: 'carro · cerca de 40 min' },
    ],
    foto: {
      id: 'photo-1630690464526-48ea6ac7d664',
      ixid: 'M3w5MDU5NDR8MHwxfHNlYXJjaHwxMHx8TWFjZWklQzMlQjMlMjBCcmF6aWx8ZW58MXwwfHx8MTc5MTgzMzI0NHww',
      cor: '#D9D9D9',
      fotografo: 'André Magalhães',
    },
  },
];
