import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Como Fugir do Turismo de Massa | Trix Travel',
  description: 'Fugir do turismo de massa não é sobre lugar secreto — é sobre não perder seu tempo de viagem em fila pra ver o que todo mundo já viu numa foto.',
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
