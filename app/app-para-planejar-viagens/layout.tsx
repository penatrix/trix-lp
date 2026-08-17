import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O melhor App para Planejar Viagens | Trix Travel',
  description: 'Substitua planilhas e dezenas de abas abertas pelo app inteligente que organiza seu roteiro e logística automaticamente.',
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