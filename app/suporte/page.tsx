import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// O endereço de suporte das duas lojas (o "Support URL" da App Store pede
// uma página na web, não um mailto). Junta o canal oficial dos Termos
// (contato@trix.travel) e as dúvidas que mais chegam: senha, assinatura,
// roteiro que não ficou pronto e exclusão de conta. Os caminhos citam os
// rótulos do app como estão na tela.

export const metadata: Metadata = {
  title: 'Suporte | Trix',
  description:
    'Como falar com a Trix e resolver as dúvidas mais comuns: senha, assinatura Premium, roteiro e exclusão de conta.',
  alternates: { canonical: '/suporte' },
};

const link = 'text-terracota-700 hover:underline';
const forte = 'text-neutro-950 font-semibold';

export default function Suporte() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-neutro-950">
      <main>
        <h1 className="titulo-secao text-4xl md:text-5xl font-bold mb-2 text-neutro-950">Suporte</h1>
        <p className="text-sm text-neutro-600 mb-10">
          App Trix, da Trix Travel (PAULO CAIRES PENA PESSOA JUNIOR TECNOLOGIA DA INFORMAÇÃO LTDA, CNPJ 67.944.832/0001-37)
        </p>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Fale com a gente</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                Escreva para{' '}
                <a href="mailto:contato@trix.travel?subject=Suporte%20Trix" className={link}>contato@trix.travel</a>.
              </p>
              <p>
                Para ganhar tempo, mande do e-mail da sua conta e diga o aparelho (iPhone, Android ou navegador) e o
                roteiro de que está falando.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Senha</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                Na tela de entrar, toque em <strong className={forte}>Esqueci minha senha</strong> e informe o e-mail da conta.
                O link para criar uma senha nova chega por e-mail. Se não aparecer em alguns minutos, confira o lixo
                eletrônico.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Assinatura Premium</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                A cobrança é feita pela App Store ou pela Google Play, na conta da loja do seu aparelho. No app, em{' '}
                <strong className={forte}>Perfil</strong>, na seção <strong className={forte}>Premium</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className={forte}>Restaurar compras</strong> traz de volta o Premium num aparelho novo ou depois de
                  reinstalar o app.
                </li>
                <li>
                  <strong className={forte}>Gerenciar assinatura</strong> abre a loja, que é onde se cancela. A assinatura
                  renova automaticamente até ser cancelada, e o Premium vale até o fim do período já pago.
                </li>
              </ul>
              <p>
                Reembolso é pedido pelo canal da loja onde você assinou: na Apple, em reportaproblem.apple.com; no Google,
                pela própria Google Play. Se tiver dificuldade, escreva para a gente e apoiamos o pedido junto à loja.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Roteiro</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                Se um roteiro não ficou pronto, ele não conta na sua cota do mês e o crédito avulso volta para a sua conta.
                Pode gerar de novo.
              </p>
              <p>
                Encontrou um lugar fechado ou uma informação errada? Use a troca de atividade no próprio roteiro e conte
                para a gente qual era, com o nome do roteiro e o dia. É o tipo de erro que mais queremos corrigir.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Conta e dados</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                Para excluir a conta, veja o passo a passo em{' '}
                <Link href="/excluir-conta" className={link}>Excluir sua conta</Link>. Assuntos de privacidade vão para{' '}
                <a href="mailto:privacidade@trix.travel" className={link}>privacidade@trix.travel</a>.
              </p>
              <p>
                As regras do serviço estão nos <Link href="/termos" className={link}>Termos de Uso</Link> e na{' '}
                <Link href="/privacidade" className={link}>Política de Privacidade</Link>.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Link href="/" className="mt-8 inline-block text-terracota-700 font-semibold hover:underline">
        &larr; Voltar para a Home
      </Link>
    </div>
  );
}
