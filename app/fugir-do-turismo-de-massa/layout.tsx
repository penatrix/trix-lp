import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Como fugir do turismo de massa | Trix',
  description: 'Não é caçar lugar secreto. É não gastar metade da viagem numa fila para ver o que todo mundo já viu na mesma foto.',
  alternates: {
    canonical: '/fugir-do-turismo-de-massa',
  },
};

export default function PillarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
