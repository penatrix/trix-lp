import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'App para planejar viagem: o que a planilha não faz | Trix',
  description: 'Planilha guarda o que você já decidiu. A Trix pesquisa, decide e mostra o critério: roteiro dia a dia, com trajeto e custo estimado.',
  alternates: {
    canonical: '/app-para-planejar-viagens',
  },
};

export default function PillarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}