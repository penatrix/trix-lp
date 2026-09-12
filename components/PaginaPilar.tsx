import React from 'react';
import Cabecalho from './Cabecalho';
import ChamadaFinal from './ChamadaFinal';
import Footer from './Footer';
import Blocos, { type Bloco } from './Blocos';
import WaitlistForm from './WaitlistForm';

/**
 * O molde das páginas de conteúdo.
 *
 * Seis páginas repetiam a mesma estrutura -- cabeçalho, hero, blocos de
 * texto, chamada final, rodapé -- cada uma com a sua cópia do markup. O
 * efeito prático era que toda correção de marca precisava ser feita seis
 * vezes, e bastava esquecer uma para o site ficar com duas identidades.
 * Foi assim que "Junte-se à lista VIP" sobreviveu em cinco lugares e o
 * selo "Mágico" em quatro.
 *
 * Aqui a estrutura mora uma vez e cada página entrega só o que tem de
 * próprio. O `slug` vira a origem registrada no formulário, que é o que
 * permite saber qual página trouxe cada inscrição -- é a única medição
 * que este site tem.
 */
export default function PaginaPilar({
  slug,
  rotulo,
  titulo,
  resumo,
  secao,
  introSecao,
  blocos,
  fecho,
}: {
  slug: string;
  rotulo: string;
  titulo: React.ReactNode;
  resumo: string;
  secao: string;
  introSecao: string;
  blocos: Bloco[];
  fecho?: string;
}) {
  return (
    <div className="min-h-screen bg-areia font-sans text-neutro-800">
      <Cabecalho />

      <section className="mx-auto max-w-4xl px-6 py-20">
        {/* Petróleo é categoria -- e um rótulo de seção é exatamente
            isso. Terracota aqui seria ação onde não há ação. */}
        <p className="rotulo-secao text-petroleo">{rotulo}</p>
        <h1 className="titulo-hero mb-6 mt-4 text-4xl leading-[1.1] text-navy-500 md:text-5xl">
          {titulo}
        </h1>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutro-600">
          {resumo}
        </p>
        <WaitlistForm source={`${slug}_hero`} variant="hero" />
      </section>

      <Blocos
        titulo={secao}
        intro={introSecao}
        blocos={blocos}
        fecho={fecho}
      />

      <ChamadaFinal source={`${slug}_cta`} />
      <Footer />
    </div>
  );
}
