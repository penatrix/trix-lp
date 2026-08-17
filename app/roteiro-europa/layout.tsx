import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roteiro Europa: Planejamento Logístico Perfeito | Trix Travel',
  description: 'Vai fazer um mochilão ou Eurotour? A IA do Trix organiza seus deslocamentos entre países e cidades da Europa em segundos.',
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