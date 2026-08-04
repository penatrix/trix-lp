import React from 'react';

export default function Politica() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
      <div className="prose prose-teal max-w-none">
        <p>Bem-vindo(a) à Trix Travel ("nós", "nosso" ou "Trix"). Ao acessar nosso aplicativo, site (trix.travel) e serviços relacionados, você concorda com estes Termos de Uso. Leia atentamente.

1. O Serviço Trix Travel
A Trix Travel atua como um concierge de viagens nativo em Inteligência Artificial. Nosso propósito é eliminar a fadiga analítica do planejamento de viagens, gerando roteiros hiper-personalizados com base em suas preferências (orçamento, ritmo, acompanhantes, pet-friendly, etc.).

2. Cadastro e Segurança da Conta
Para salvar roteiros e acessar recursos avançados, você deve criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais. Nosso sistema de autenticação é seguro (gerenciado via Supabase), mas a segurança de seu dispositivo é sua responsabilidade. Você pode deletar sua conta e todos os dados associados a qualquer momento através do menu "Settings" do aplicativo, em conformidade com as diretrizes da Apple e do Google.

3. Isenção de Responsabilidade sobre Reservas e Afiliados
A Trix Travel não é uma agência de viagens tradicional. Nós fornecemos sugestões de roteiros e logística geradas por IA. Os links fornecidos para hotéis, passagens aéreas e atrações podem ser links de afiliados (modelo B2B2C invisível), gerando comissão para a Trix sem custo adicional para você.
Não garantimos a disponibilidade em tempo real ou preços estáticos de fornecedores terceiros. Não nos responsabilizamos por overbooking, cancelamentos, acidentes ou disputas comerciais entre você e os prestadores de serviço finais.

4. Uso Aceitável da Plataforma
Você concorda em não:
Fazer engenharia reversa de nosso motor de geração de roteiros ou abusar da nossa integração com APIs (como Gemini e Cloud Run).
Gerar roteiros em massa através de bots ou scripts automatizados.
Utilizar a plataforma para qualquer fim ilegal, fraudulento ou não autorizado.

5. Limitação de Responsabilidade
O Trix Travel utiliza tecnologias de ponta para cruzar dados. Contudo, informações sobre horários de funcionamento, regras locais e custos estimados podem mudar na vida real. O usuário assume total responsabilidade por verificar informações críticas (como documentação, segurança e vistos) antes da viagem.

6. Lei Aplicável e Foro
Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Curitiba, Paraná, sede da nossa operação, para dirimir quaisquer controvérsias.</p>
        </div>
      <a href="/" className="mt-8 inline-block text-teal-600 font-semibold hover:underline">
        &larr; Voltar para a Home
      </a>
    </div>
  );
}