import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quanto custa viajar: como calcular o orçamento | Trix',
  description: 'A maior fonte de estouro não é o que se gasta, é o que ficou fora da conta. Como separar fixo de variável e por pessoa de total.',
  alternates: {
    canonical: '/quanto-custa-viajar',
  },
};

export default function PillarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
