import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roteiro de viagem de 15 dias: como montar | Trix',
  description: 'Quinze dias rendem mais em três bases do que em oito. Como decidir bases, folgas e quanto deslocamento cabe em cada dia.',
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