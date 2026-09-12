import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roteiro pela Europa: trens, voos curtos e fronteiras | Trix',
  description: 'Numa viagem por vários países, o que estoura o orçamento é o que acontece entre as cidades. Os três erros que mais custam caro.',
  alternates: {
    canonical: '/roteiro-europa',
  },
};


export default function PillarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}