import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quanto Custa Viajar? Como Calcular seu Orçamento | Trix Travel',
  description: 'A maior fonte de estouro de orçamento de viagem não é o que você gasta, é o que esqueceu de calcular antes de sair de casa. Veja como não se perder.',
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
