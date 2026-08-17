import React from 'react';
import Link from 'next/link';

export default function Termos() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-primary-text">
      <main>
        <h1 className="text-4xl font-bold mb-1">Termos de Uso</h1>
        <p className="text-sm text-secondary-text mb-8">Última atualização: julho de 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Bem-vindo(a) à Trix Travel (&quot;nós&quot;, &quot;nosso&quot; ou &quot;Trix&quot;). Ao acessar nosso aplicativo, site (trix.travel) e serviços relacionados, você concorda com estes Termos de Uso. Leia atentamente.
          </p>

          <section>
            <h3 className="font-semibold mb-1">1. O Serviço Trix Travel</h3>
            <p className="text-secondary-text">
              A Trix Travel atua como um concierge de viagens nativo em Inteligência Artificial. Nosso propósito é eliminar a fadiga analítica do planejamento de viagens, gerando roteiros hiper-personalizados com base em suas preferências (orçamento, ritmo, acompanhantes, pet-friendly, etc.).
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">2. Cadastro e Segurança da Conta</h3>
            <p className="text-secondary-text">
              Para salvar roteiros e acessar recursos avançados, você deve criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais. Nosso sistema de autenticação é seguro (gerenciado via Supabase), mas a segurança de seu dispositivo é sua responsabilidade. Você pode deletar sua conta e todos os dados associados a qualquer momento através do menu &quot;Configurações&quot; do aplicativo, em conformidade com as diretrizes da Apple e do Google.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">3. Isenção de Responsabilidade sobre Reservas e Afiliados</h3>
            <p className="text-secondary-text">
              A Trix Travel não é uma agência de viagens tradicional. Nós fornecemos sugestões de roteiros e logística geradas por IA. Os links fornecidos para hotéis, passagens aéreas e atrações podem ser links de afiliados (modelo B2B2C invisível), gerando comissão para a Trix sem custo adicional para você.
              <br />
              Não garantimos a disponibilidade em tempo real ou preços estáticos de fornecedores terceiros. Não nos responsabilizamos por overbooking, cancelamentos, acidentes ou disputas comerciais entre você e os prestadores de serviço finais.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">4. Uso Aceitável da Plataforma</h3>
            <p className="text-secondary-text">Você concorda em não:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary-text">
              <li>Fazer engenharia reversa de nosso motor de geração de roteiros ou abusar da nossa integração com APIs (como Gemini e Cloud Run).</li>
              <li>Gerar roteiros em massa através de bots ou scripts automatizados.</li>
              <li>Utilizar a plataforma para qualquer fim ilegal, fraudulento ou não autorizado.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-1">5. Limitação de Responsabilidade</h3>
            <p className="text-secondary-text">
              O Trix Travel utiliza tecnologias de ponta para cruzar dados. Contudo, informações sobre horários de funcionamento, regras locais e custos estimados podem mudar na vida real. O usuário assume total responsabilidade por verificar informações críticas (como documentação, segurança e vistos) antes da viagem.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">6. Lei Aplicável e Foro</h3>
            <p className="text-secondary-text">
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de Curitiba, Paraná, sede da nossa operação, para dirimir quaisquer controvérsias.
            </p>
          </section>
        </div>
      </main>

      <Link href="/" className="mt-8 inline-block text-primary font-semibold hover:underline">
        &larr; Voltar para a Home
      </Link>
    </div>
  );
}
