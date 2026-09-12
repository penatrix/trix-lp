import React from 'react';

/**
 * O símbolo Agulha: losango dividido na mediana horizontal, metade
 * terracota apontando, metade navy ancorando.
 *
 * Desenhado inline, e não via `<img>`, por dois motivos. Ele precisa ser
 * nítido a 16px, que é o mínimo da marca; e a versão sobre navy troca o
 * navy por areia, o que com arquivo seriam dois requests e duas cópias.
 *
 * O que NUNCA se faz com ele, e vale repetir porque é fácil de quebrar
 * num refactor: girar, distorcer, inverter as metades, trocar as cores,
 * aplicar sombra ou gradiente, ou usar terracota como fundo.
 */
export function Simbolo({
  tamanho = 28,
  sobreNavy = false,
  className = '',
}: {
  tamanho?: number;
  sobreNavy?: boolean;
  className?: string;
}) {
  // Sobre navy a metade que ancora vira areia -- navy sobre navy
  // desapareceria. É a variante `trix-simbolo-sobre-navy` do brandbook.
  const ancora = sobreNavy ? '#F5EFE6' : '#14213D';
  const ponta = '#D9622B';
  const id = React.useId();

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Trix"
    >
      <defs>
        <clipPath id={`meia-${id}`}>
          <rect x="0" y="0" width="100" height="50" />
        </clipPath>
      </defs>
      <path
        d="M50 9L91 50L50 91L9 50Z"
        fill={ancora}
        stroke={ancora}
        strokeWidth="11"
        strokeLinejoin="round"
      />
      <g clipPath={`url(#meia-${id})`}>
        <path
          d="M50 9L91 50L50 91L9 50Z"
          fill={ponta}
          stroke={ponta}
          strokeWidth="11"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/**
 * Símbolo mais o nome.
 *
 * **Isto é um substituto, e precisa passar pela Lais.** O brandbook
 * define o lockup nas págs. 15-18, mas `design/logo/` só tem os SVGs do
 * símbolo -- não existe arquivo de lockup para espelhar aqui. Enquanto
 * ele não existir, o nome vai composto em Archivo, que é a família do
 * brandbook. Quando o arquivo oficial chegar, este componente vira um
 * `<img>` e o texto sai.
 *
 * O nome é **Trix**, sem "Travel": o lockup fixa Trix como marca e
 * Travel como descritor fora do desenho. Em assinatura e título o nome
 * vai sem artigo; em texto corrido, sempre com -- e a marca é feminina,
 * a Trix.
 *
 * A área de respiro é metade da altura do símbolo, e é o `gap` abaixo.
 */
export default function Marca({
  tamanho = 28,
  sobreNavy = false,
}: {
  tamanho?: number;
  sobreNavy?: boolean;
}) {
  return (
    <span
      className="inline-flex items-center"
      style={{ gap: tamanho / 2 }}
    >
      <Simbolo tamanho={tamanho} sobreNavy={sobreNavy} />
      <span
        className={`titulo-secao ${sobreNavy ? 'text-areia' : 'text-navy-500'}`}
        style={{ fontSize: tamanho * 0.72 }}
      >
        Trix
      </span>
    </span>
  );
}
