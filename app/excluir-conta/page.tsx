import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// A página que o Google Play exige no formulário "Segurança dos dados":
// um endereço na web, fora do app, onde a pessoa vê como excluir a conta
// e o que acontece com os dados. A política de privacidade já diz tudo
// isso, mas espalhado nas seções 8 e 9 e sem caminho para quem não tem
// mais o app instalado. Esta página junta o que a loja pede num lugar só
// e não muda a política: os prazos abaixo são os da seção 8.
//
// A âncora `#dados` é o segundo link do formulário, o de excluir parte
// dos dados sem excluir a conta.

export const metadata: Metadata = {
  title: 'Excluir sua conta | Trix',
  description:
    'Como excluir sua conta da Trix, ou só parte dos seus dados, e o que acontece com cada informação.',
  alternates: { canonical: '/excluir-conta' },
};

const link = 'text-terracota-700 hover:underline';
const forte = 'text-neutro-950 font-semibold';
const celula = 'border border-neutro-300 px-4 py-2';

export default function ExcluirConta() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-neutro-950">
      <main>
        <h1 className="titulo-secao text-4xl md:text-5xl font-bold mb-2 text-neutro-950">Excluir sua conta</h1>
        <p className="text-sm text-neutro-600 mb-10">
          App Trix, da Trix Travel (PAULO CAIRES PENA PESSOA JUNIOR TECNOLOGIA DA INFORMAÇÃO LTDA, CNPJ 67.944.832/0001-37)
        </p>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Pelo app, na hora</h2>
            <div className="space-y-3 text-neutro-600">
              <ol className="list-decimal pl-5 space-y-1">
                <li>Abra o app da Trix e entre na sua conta.</li>
                <li>Toque em <strong className={forte}>Perfil</strong>, na barra de baixo.</li>
                <li>Desça até <strong className={forte}>Privacidade e conta</strong>.</li>
                <li>Toque em <strong className={forte}>Excluir minha conta</strong> e confirme.</li>
              </ol>
              <p>A exclusão acontece no mesmo instante. Não é preciso falar com a gente.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Sem o app</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                Se você não tem mais o app instalado, escreva para{' '}
                <a href="mailto:privacidade@trix.travel?subject=Excluir%20minha%20conta" className={link}>privacidade@trix.travel</a>{' '}
                a partir do e-mail da sua conta, com o assunto <strong className={forte}>Excluir minha conta</strong>.
              </p>
              <p>
                Excluímos em até <strong className={forte}>15 dias</strong> e confirmamos por e-mail. Se o pedido vier de outro
                endereço, podemos pedir uma confirmação de identidade antes, para ninguém excluir a conta de outra pessoa.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">O que é apagado e o que fica</h2>
            <div className="space-y-3 text-neutro-600">
              <p>
                Ao excluir a conta, apagamos de forma <strong className={forte}>imediata, permanente e irreversível</strong>: seu
                perfil e suas preferências, todos os seus roteiros, os créditos e as indicações. Não guardamos cópia para
                recuperação, e não há como restaurar os dados, nem a seu pedido.
              </p>
              <p>Algumas informações ficam por um prazo, porque a lei exige:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-neutro-100 text-neutro-950">
                      <th className={`${celula} text-left font-semibold`}>O que fica</th>
                      <th className={`${celula} text-left font-semibold`}>Por quanto tempo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={celula}>Registros de acesso ao app (IP, data e hora)</td>
                      <td className={celula}>6 meses, pelo art. 15 do Marco Civil da Internet</td>
                    </tr>
                    <tr>
                      <td className={celula}>Registros de compra, se você assinou o Premium</td>
                      <td className={celula}>5 anos, por obrigação fiscal e contábil</td>
                    </tr>
                    <tr>
                      <td className={celula}>Mensagens trocadas com o suporte</td>
                      <td className={celula}>2 anos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Os registros de custo de uso do serviço continuam, mas sem nenhum vínculo com você: a ligação com a sua conta
                é apagada junto com ela.
              </p>
            </div>
          </section>

          <section id="dados" className="pt-10 border-t border-neutro-300 scroll-mt-8">
            <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">Excluir só parte dos dados</h2>
            <div className="space-y-3 text-neutro-600">
              <p>Você pode apagar informações sem excluir a conta:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className={forte}>Um roteiro:</strong> abra o roteiro, toque nos três pontos no alto da tela e use{' '}
                  <strong className={forte}>Excluir roteiro</strong>, no fim da folha. O roteiro e os dados usados para gerá-lo são
                  apagados na hora.
                </li>
                <li>
                  <strong className={forte}>Seu telefone e outros dados do perfil:</strong> em <strong className={forte}>Perfil</strong>,
                  toque em <strong className={forte}>Editar</strong>, em Seus dados, e apague o campo.
                </li>
                <li>
                  <strong className={forte}>Os dados de uso do app:</strong> em <strong className={forte}>Perfil</strong>, desligue{' '}
                  <strong className={forte}>Compartilhar dados de uso</strong>. Daí em diante nada mais é enviado.
                </li>
                <li>
                  <strong className={forte}>Seus registros de uso e as preferências que o app aprendeu:</strong> escreva para{' '}
                  <a href="mailto:privacidade@trix.travel?subject=Excluir%20parte%20dos%20meus%20dados" className={link}>privacidade@trix.travel</a>{' '}
                  dizendo o que quer apagar. Atendemos em até 15 dias.
                </li>
              </ul>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <div className="space-y-3 text-neutro-600">
              <p>
                Os detalhes de como tratamos seus dados estão na{' '}
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
