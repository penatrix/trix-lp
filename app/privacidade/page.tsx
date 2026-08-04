import React from 'react';

export default function Termos() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
      <div className="prose prose-teal max-w-none">
        <p>A Trix Travel tem o compromisso de proteger sua privacidade. Esta Política explica como coletamos, usamos e protegemos seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e diretrizes internacionais de lojas de aplicativos.

1. Dados que Coletamos
Dados de Conta: E-mail e senha (criptografada), fornecidos durante o cadastro.
Dados de Viagem: Destinos de interesse, orçamento estipulado, perfil de viajante (ex: com pets, em família) e preferências de ritmo.
Dados de Uso e Navegação: Interações com o aplicativo, tempos de tela, uso do PlacePicker e engajamento com links de parceiros afiliados.

2. Como Usamos Seus Dados
Seus dados são usados estritamente para:
Alimentar nosso motor de IA e gerar o roteiro específico e acionável para você.
Melhorar a UX/UI e a estabilidade da plataforma (ex: monitoramento de latência e consumo de tokens).
Viabilizar a compra de serviços por meio de links de afiliados contextuais de forma fluida.

3. Compartilhamento de Dados com Terceiros
Não vendemos seus dados para anunciantes. Para o aplicativo funcionar, compartilhamos dados de forma segura com:
Google Cloud & Gemini API: Para processamento de linguagem natural e estruturação da viagem. Os dados enviados são puramente contextuais à sua viagem.
Supabase: Para armazenamento seguro em banco de dados PostgreSQL estruturado.
Parceiros de Afiliação (Booking, Civitatis, etc.): Apenas quando você clica para realizar uma reserva, sendo direcionado ao ambiente seguro do parceiro.

4. Retenção e Exclusão de Dados
Seus dados são mantidos enquanto sua conta estiver ativa. Você possui o direito absoluto de apagar sua conta a qualquer momento. Ao acionar a opção "Deletar Conta" nas configurações do aplicativo, seus dados pessoais e roteiros salvos serão permanentemente apagados de nossos servidores, respeitando integralmente os requisitos para publicação nas lojas.

5. Contato
Para dúvidas sobre privacidade, LGPD ou solicitações relativas aos seus dados, entre em contato com nosso fundador: pena@trix.travel</p>
        </div>
      <a href="/" className="mt-8 inline-block text-teal-600 font-semibold hover:underline">
        &larr; Voltar para a Home
      </a>
    </div>
  );
}