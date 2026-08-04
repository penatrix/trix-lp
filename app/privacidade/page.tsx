import React from 'react';

export default function Politica() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
      <div className="prose prose-teal max-w-none">
        {/* Conteúdo */}
      <main className="max-w-4xl mx-auto px-6 py-8 text-primary-text">
        <h2 className="text-3xl font-bold mb-1">Política de Privacidade</h2>
        <p className="text-sm text-secondary-text mb-8">Última atualização: Agosto de 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            No Trix Travel, levamos sua privacidade a sério. Esta política descreve como coletamos, usamos e protegemos seus dados pessoais.
          </p>

          <section>
            <h3 className="font-semibold mb-1">1. Dados que Coletamos</h3>
            <p className="text-secondary-text">
              Coletamos as informações que você nos fornece diretamente, como seu endereço de e-mail ao se inscrever em nossa lista VIP, e preferências de viagem utilizadas para gerar seus roteiros via IA.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">2. Como Usamos seus Dados</h3>
            <p className="text-secondary-text">
              Utilizamos seus dados exclusivamente para operar o Trix Travel, melhorar a inteligência do nosso gerador de roteiros, fornecer suporte ao cliente e enviar atualizações importantes sobre a plataforma.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">3. Compartilhamento de Informações</h3>
            <p className="text-secondary-text">
              Não vendemos seus dados pessoais. O Trix Travel interage com fornecedores de tecnologia terceirizados (como Google Cloud e Supabase) apenas na medida estritamente necessária para processamento de rotinas do sistema.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">4. Segurança</h3>
            <p className="text-secondary-text">
              Implementamos medidas de segurança de nível industrial para proteger sua conta. Recomendamos o uso de senhas fortes e cautela ao acessar sua conta em dispositivos públicos.
            </p>
          </section>
          
          <section>
            <h3 className="font-semibold mb-1">5. Seus Direitos</h3>
            <p className="text-secondary-text">
              Você tem o direito de solicitar a exclusão total dos seus dados a qualquer momento diretamente pelas configurações do aplicativo ou entrando em contato com nosso suporte via e-mail.
            </p>
          </section>
        </div>
      </main>
        </div>
      <a href="/" className="mt-8 inline-block text-teal-600 font-semibold hover:underline">
        &larr; Voltar para a Home
      </a>
    </div>
  );
}