import React from 'react';

/**
 * Os ícones do site, na especificação da pág. 20 do brandbook: grade de
 * 24px, traço de 1,5px, sem preenchimento.
 *
 * Substituem os caracteres `✓`, `✕` e `▪` que estavam nas listas. Eles
 * não eram emoji -- e a regra da casa proíbe emoji em produto --, mas
 * eram glifos de fonte, que mudam de desenho e de peso conforme o
 * sistema de quem lê. Traço próprio é o que faz a mesma lista parecer a
 * mesma lista no Mac e no Windows.
 *
 * `aria-hidden` em todos: o significado está no texto ao lado. Leitor de
 * tela anunciando "check" antes de cada item é ruído, não informação.
 */
type Props = { tamanho?: number; className?: string };

function Base({
  tamanho = 20,
  className = '',
  children,
}: Props & { children: React.ReactNode }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const Confere = (p: Props) => (
  <Base {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);

export const Dispensa = (p: Props) => (
  <Base {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Base>
);

/** Trajeto: o que a Trix calcula e a planilha não.
 *
 * Dois pontos e o caminho entre eles, com a quebra no meio -- é o
 * desenho que diz "daqui até ali, e o percurso importa". A primeira
 * versão era uma curva em S com um ponto solto: renderizada a 24px não
 * lia como nada. Só olhando na tela para perceber. */
export const Trajeto = (p: Props) => (
  <Base {...p}>
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="5" r="2" />
    <path d="M6.6 17.6 11 13.2v-3l6.4-3.8" />
  </Base>
);

/** Ritmo: o dia a dia no passo de quem viaja. */
export const Ritmo = (p: Props) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7v5l3 2" />
  </Base>
);

/** Custo: o número que dá para conferir. */
export const Custo = (p: Props) => (
  <Base {...p}>
    <path d="M4 7h16v11H4zM4 11h16" />
    <circle cx="16" cy="14.5" r="1.2" />
  </Base>
);
