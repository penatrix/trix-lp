import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criar Roteiro de Viagem de 15 dias | Trix Travel',
  description: 'Gere um roteiro de viagem de 15 dias personalizado e otimizado com inteligência artificial em segundos. Diga adeus às planilhas.',
  alternates: {
    canonical: '/roteiro-de-viagem-15-dias',
  },
};
  

export default function PillarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}