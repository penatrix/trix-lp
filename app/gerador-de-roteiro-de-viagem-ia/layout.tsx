import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerador de roteiro de viagem: o que separa um roteiro de um texto | Trix',
  description: 'Nome exato do lugar, deslocamento entre eles, horário conferido e custo que declara se é por pessoa ou do grupo todo.',
  alternates: {
    canonical: '/gerador-de-roteiro-de-viagem-ia',
  },
};

export default function PillarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
