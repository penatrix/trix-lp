import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerador de Roteiro de Viagem com IA | Trix Travel',
  description: 'Um gerador de roteiro de viagem que calcula logística real, valida se os lugares estão abertos e se adapta ao seu ritmo. Não é um chatbot genérico.',
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
