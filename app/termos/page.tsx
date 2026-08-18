import React from 'react';
import Link from 'next/link';
import LegalResumo from '../../components/LegalResumo';

export default function Termos() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-primary-text">
      <main>
        <h1 className="font-outfit text-4xl md:text-5xl font-bold mb-2 text-primary-text">Termos de Uso</h1>
        <p className="text-sm text-secondary-text mb-10">Versão 1.0 — vigente a partir de agosto de 2026</p>

        <div className="space-y-4 text-sm md:text-base leading-relaxed mb-10">
          <p>
            Estes Termos regulam o uso do aplicativo e do site Trix Travel. Ao criar sua conta, você declara ter 18 anos ou mais e concorda com o que está escrito aqui.
          </p>
          <p className="text-secondary-text">
            Cada seção começa com um resumo em linguagem simples. O resumo ajuda a entender, mas o texto completo é o que vale juridicamente.
          </p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">1. Quem somos</h2>
            <LegalResumo>
              a Trix Travel é operada por uma empresa brasileira, com CNPJ ativo e endereço fixo. Você sempre saberá com quem está contratando.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p>
                O serviço Trix Travel é oferecido por <strong className="text-primary-text font-semibold">PAULO CAIRES PENA PESSOA JUNIOR TECNOLOGIA DA INFORMAÇÃO LTDA</strong>, sociedade limitada inscrita no CNPJ sob o nº 67.944.832/0001-37, com sede na Rua Visconde do Rio Branco, 1488, Conjunto 909, Centro, Curitiba/PR, CEP 80.420-210 (&quot;Trix Travel&quot;, &quot;nós&quot;).
              </p>
              <p>Nome fantasia: Trix Travel.</p>
              <p>
                Contato geral: <a href="mailto:contato@trix.travel" className="text-primary hover:underline">contato@trix.travel</a>
                <br />
                Assuntos de privacidade e proteção de dados: <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a>
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">2. Aceite, idade mínima e território</h2>
            <LegalResumo>
              você precisa ter 18 anos. O serviço é feito para quem mora no Brasil. Ao criar a conta, você aceita estes Termos.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">2.1.</strong> Ao criar uma conta, você manifesta concordância com estes Termos e com a Política de Privacidade. Registramos a data e a versão dos Termos aceitos.</p>
              <p><strong className="text-primary-text font-semibold">2.2.</strong> O uso é permitido apenas a pessoas com <strong className="text-primary-text font-semibold">18 anos completos ou mais</strong>. Não oferecemos o serviço a crianças e adolescentes e não coletamos intencionalmente dados de menores de 18 anos. Se identificarmos uma conta de menor de idade, ela será encerrada e os dados eliminados.</p>
              <p><strong className="text-primary-text font-semibold">2.3.</strong> O Trix Travel é direcionado a pessoas residentes no Brasil. Os preços são em reais, o atendimento é em português e a distribuição do aplicativo é limitada ao território brasileiro. Não direcionamos nossa oferta a residentes na União Europeia ou no Reino Unido.</p>
              <p><strong className="text-primary-text font-semibold">2.4.</strong> Você pode planejar viagens para qualquer destino do mundo. A restrição acima é sobre onde você reside, não sobre para onde você viaja.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">3. O que o Trix Travel é (e o que não é)</h2>
            <LegalResumo>
              somos um concierge de viagens com inteligência artificial. Não somos agência, não vendemos passagem, não fazemos reserva por você.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">3.1.</strong> O Trix Travel gera roteiros de viagem personalizados usando inteligência artificial, a partir das informações e preferências que você fornece.</p>
              <p><strong className="text-primary-text font-semibold">3.2.</strong> <strong className="text-primary-text font-semibold">Não somos agência de viagens nem operadora turística.</strong> Não intermediamos, não vendemos e não garantimos serviços de transporte, hospedagem, passeios ou seguro. Não emitimos bilhetes nem confirmamos reservas.</p>
              <p><strong className="text-primary-text font-semibold">3.3.</strong> Quando o roteiro apresenta um hotel, um passeio ou um serviço, trata-se de <strong className="text-primary-text font-semibold">sugestão informativa</strong>. Qualquer contratação ocorre diretamente entre você e o fornecedor, sob as regras dele.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">4. Sua conta</h2>
            <LegalResumo>
              a conta é sua e pessoal. Cuide da senha. Você pode apagar tudo quando quiser, direto no app.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">4.1.</strong> Para salvar roteiros e acessar recursos completos, é necessário criar conta com e-mail e senha.</p>
              <p><strong className="text-primary-text font-semibold">4.2.</strong> A conta é pessoal e intransferível. Você é responsável por manter a confidencialidade da senha e pelas atividades realizadas na sua conta. Avise-nos imediatamente em <a href="mailto:contato@trix.travel" className="text-primary hover:underline">contato@trix.travel</a> se suspeitar de acesso não autorizado.</p>
              <p><strong className="text-primary-text font-semibold">4.3.</strong> Você pode <strong className="text-primary-text font-semibold">excluir sua conta a qualquer momento</strong>, diretamente no menu de configurações do aplicativo. A exclusão elimina sua conta, seu perfil e seus roteiros de forma permanente e irreversível, conforme detalhado na Política de Privacidade.</p>
              <p><strong className="text-primary-text font-semibold">4.4.</strong> É proibido criar múltiplas contas para obter benefícios promocionais em duplicidade.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">5. Conteúdo gerado por inteligência artificial</h2>
            <LegalResumo>
              os roteiros são produzidos por IA e podem conter erros. Confira sempre horários, preços, vistos e regras locais antes de viajar. Isso é importante.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">5.1.</strong> Os roteiros, sugestões, checklists e informações apresentadas são <strong className="text-primary-text font-semibold">gerados automaticamente por modelos de inteligência artificial</strong>. Eles não são revisados individualmente por uma pessoa antes de serem exibidos.</p>
              <p><strong className="text-primary-text font-semibold">5.2.</strong> Sistemas de IA podem produzir informações <strong className="text-primary-text font-semibold">imprecisas, desatualizadas ou incorretas</strong>. Horários de funcionamento, preços, disponibilidade, exigências de entrada, condições de segurança e regras locais mudam com frequência e fora do nosso controle.</p>
              <p><strong className="text-primary-text font-semibold">5.3.</strong> Você é responsável por <strong className="text-primary-text font-semibold">verificar em fontes oficiais</strong> todas as informações críticas antes e durante a viagem, especialmente: exigências de passaporte, visto e vacinação; regras de fronteira e alfândega; condições de segurança do destino; cobertura de seguro; horários e preços dos estabelecimentos.</p>
              <p><strong className="text-primary-text font-semibold">5.4.</strong> Estimativas de custo são aproximações para fins de planejamento e não constituem cotação, orçamento ou garantia de preço.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">6. Planos, preços e pagamento</h2>
            <LegalResumo>
              você pode usar de graça com limite. Para mais, existe compra avulsa e assinatura anual. Toda cobrança acontece dentro da App Store ou da Google Play — nós não processamos seu pagamento.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">6.1. Plano gratuito.</strong> Permite gerar <strong className="text-primary-text font-semibold">1 roteiro por mês</strong>, além do módulo de brainstorming. Podemos ajustar os limites do plano gratuito, comunicando previamente pelo aplicativo.</p>
              <p><strong className="text-primary-text font-semibold">6.2. Modalidades pagas.</strong></p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-bg text-primary-text">
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Modalidade</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">O que é</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Roteiro avulso</td>
                      <td className="border border-alternate px-4 py-2">Libera um roteiro completo, sem recorrência</td>
                      <td className="border border-alternate px-4 py-2">R$ 19,90</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Assinatura anual</td>
                      <td className="border border-alternate px-4 py-2">Acesso aos recursos premium por 12 meses</td>
                      <td className="border border-alternate px-4 py-2">R$ 49,90/ano</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>Os valores vigentes são sempre os exibidos no aplicativo no momento da compra. Alterações de preço não afetam compras já realizadas nem o período já pago de uma assinatura vigente.</p>
              <p><strong className="text-primary-text font-semibold">6.3. Processamento do pagamento.</strong> Todas as compras são processadas pela <strong className="text-primary-text font-semibold">Apple App Store</strong> ou pelo <strong className="text-primary-text font-semibold">Google Play</strong>, conforme a loja de origem do aplicativo. A Trix Travel <strong className="text-primary-text font-semibold">não coleta, não armazena e não tem acesso</strong> aos seus dados de cartão ou meio de pagamento. A relação de pagamento é regida também pelos termos da respectiva loja.</p>
              <p><strong className="text-primary-text font-semibold">6.4. Renovação automática.</strong> A assinatura anual <strong className="text-primary-text font-semibold">renova automaticamente</strong> ao fim de cada período de 12 meses, pelo preço vigente, salvo cancelamento prévio. A loja notifica você antes da renovação, conforme as regras dela.</p>
              <p><strong className="text-primary-text font-semibold">6.5. Cancelamento.</strong> O cancelamento da renovação é feito <strong className="text-primary-text font-semibold">nas configurações de assinatura da App Store ou da Google Play</strong>, não no aplicativo Trix Travel. Cancelar interrompe renovações futuras; você mantém o acesso premium até o fim do período já pago.</p>
              <p><strong className="text-primary-text font-semibold">6.6. Compra avulsa.</strong> O roteiro avulso é de pagamento único, sem recorrência, e dá acesso permanente àquele roteiro enquanto sua conta existir.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">7. Direito de arrependimento e reembolso</h2>
            <LegalResumo>
              você tem 7 dias para desistir e receber o dinheiro de volta, como manda a lei.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">7.1.</strong> Nos termos do <strong className="text-primary-text font-semibold">artigo 49 do Código de Defesa do Consumidor</strong>, você pode desistir da contratação em até <strong className="text-primary-text font-semibold">7 (sete) dias corridos</strong> contados da data da compra, com direito à devolução integral do valor pago.</p>
              <p><strong className="text-primary-text font-semibold">7.2.</strong> Como o pagamento é processado pelas lojas de aplicativos, o pedido de reembolso deve ser feito <strong className="text-primary-text font-semibold">pelo canal de reembolso da App Store ou da Google Play</strong>. Se você tiver dificuldade, escreva para <a href="mailto:contato@trix.travel" className="text-primary hover:underline">contato@trix.travel</a> e nós apoiamos o processo junto à loja.</p>
              <p><strong className="text-primary-text font-semibold">7.3.</strong> Após o prazo de arrependimento, reembolsos são analisados caso a caso, sem prejuízo dos direitos previstos no Código de Defesa do Consumidor em caso de falha na prestação do serviço.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">8. Convites e benefícios promocionais</h2>
            <LegalResumo>
              você pode ganhar acesso premium indicando amigos. As regras completas estão em documento próprio.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">8.1.</strong> Podemos oferecer acesso a recursos premium sem cobrança, por meio de programas de indicação, campanhas promocionais ou reconhecimento de participação em fases de teste.</p>
              <p><strong className="text-primary-text font-semibold">8.2.</strong> As condições do programa de indicação estão no <strong className="text-primary-text font-semibold">Regulamento do Programa de Indicação (MGM)</strong>, disponível no aplicativo e no site, que integra estes Termos.</p>
              <p><strong className="text-primary-text font-semibold">8.3.</strong> Benefícios promocionais são gratuitos, pessoais, intransferíveis, <strong className="text-primary-text font-semibold">não possuem valor monetário</strong> e não podem ser convertidos em dinheiro, crédito ou desconto em compras.</p>
              <p><strong className="text-primary-text font-semibold">8.4.</strong> Podemos suspender ou cancelar benefícios obtidos por fraude, criação de contas falsas, automação ou qualquer manipulação das regras.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">9. Compartilhamento de roteiros</h2>
            <LegalResumo>
              ao compartilhar um roteiro por link, quem tiver o link consegue ver. Pense antes de postar em grupo grande.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">9.1.</strong> O Trix Travel permite compartilhar roteiros por meio de link. Ao gerar um link de compartilhamento, você autoriza que <strong className="text-primary-text font-semibold">qualquer pessoa que tenha acesso ao link</strong> visualize o conteúdo daquele roteiro, incluindo o primeiro nome de quem o criou.</p>
              <p><strong className="text-primary-text font-semibold">9.2.</strong> Você é responsável por decidir com quem compartilha e pelo conteúdo que insere manualmente no roteiro.</p>
              <p><strong className="text-primary-text font-semibold">9.3.</strong> Se você excluir o roteiro ou sua conta, o link deixa de funcionar.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">10. Links de parceiros e afiliados</h2>
            <LegalResumo>
              alguns links do roteiro geram comissão para nós. Você não paga nada a mais por isso, e não escolhemos o parceiro pensando na comissão.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">10.1.</strong> O aplicativo pode exibir links para hospedagem, passeios, seguro viagem, conectividade e serviços correlatos. Alguns desses links são <strong className="text-primary-text font-semibold">links de afiliados</strong>: se você contratar por meio deles, a Trix Travel pode receber comissão do fornecedor.</p>
              <p><strong className="text-primary-text font-semibold">10.2.</strong> A comissão é paga pelo fornecedor e <strong className="text-primary-text font-semibold">não gera custo adicional para você</strong>.</p>
              <p><strong className="text-primary-text font-semibold">10.3.</strong> A existência de comissão não altera o conteúdo do roteiro gerado pela IA. As sugestões são construídas a partir das suas preferências, não da remuneração do parceiro.</p>
              <p><strong className="text-primary-text font-semibold">10.4.</strong> Não somos parte da relação entre você e o fornecedor. Preço, disponibilidade, cancelamento, overbooking, qualidade e execução do serviço são de responsabilidade exclusiva de quem o presta.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">11. Uso aceitável</h2>
            <LegalResumo>
              use o app como usuário normal. Não tente extrair, automatizar, copiar ou quebrar o sistema.
            </LegalResumo>
            <div className="text-secondary-text">
              <p className="mb-2">Você concorda em não:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>utilizar a plataforma para qualquer finalidade ilegal, fraudulenta ou lesiva a terceiros;</li>
                <li>gerar roteiros em massa por meio de robôs, scripts ou automações;</li>
                <li>realizar engenharia reversa, descompilar ou tentar extrair o funcionamento interno do serviço, incluindo suas instruções de geração de conteúdo;</li>
                <li>contornar limites de uso, paywall ou regras de programas promocionais;</li>
                <li>coletar dados da plataforma por raspagem (scraping) ou meios automatizados;</li>
                <li>inserir conteúdo ilícito, ofensivo, discriminatório, sexualmente explícito ou que viole direitos de terceiros;</li>
                <li>sobrecarregar, interromper ou comprometer a segurança e a estabilidade do serviço;</li>
                <li>criar múltiplas contas para obter vantagem indevida.</li>
              </ul>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">12. Propriedade intelectual</h2>
            <LegalResumo>
              a plataforma é nossa. O roteiro que você gera é seu para usar como quiser na sua vida pessoal. Se você nos mandar um relato para divulgação, pedimos sua autorização na hora.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">12.1. Nossa propriedade.</strong> A plataforma, o aplicativo, o site, a marca, a identidade visual, o código, a arquitetura, os modelos de instrução e a estrutura dos roteiros são de titularidade exclusiva da Trix Travel e protegidos por lei.</p>
              <p><strong className="text-primary-text font-semibold">12.2. Seu roteiro.</strong> Concedemos a você uma <strong className="text-primary-text font-semibold">licença gratuita, mundial, perpétua e não exclusiva</strong> para usar, adaptar, imprimir e compartilhar os roteiros gerados para <strong className="text-primary-text font-semibold">fins pessoais e não comerciais</strong>, inclusive após o encerramento da sua conta, em relação a roteiros que você tenha exportado.</p>
              <p><strong className="text-primary-text font-semibold">12.3. Uso comercial.</strong> A revenda, redistribuição sistemática ou exploração comercial dos roteiros gerados depende de autorização prévia por escrito.</p>
              <p><strong className="text-primary-text font-semibold">12.4. Relatos e depoimentos.</strong> Podemos convidar você a compartilhar relatos sobre sua experiência. <strong className="text-primary-text font-semibold">Nenhum relato será utilizado em nossos canais de comunicação sem sua autorização específica</strong>, coletada no momento do envio, com indicação de onde e como será usado. Você pode revogar essa autorização a qualquer momento escrevendo para <a href="mailto:contato@trix.travel" className="text-primary hover:underline">contato@trix.travel</a>, e retiraremos o material das publicações sob nosso controle.</p>
              <p><strong className="text-primary-text font-semibold">12.5.</strong> Não utilizamos as fotos do seu perfil para fins de marketing.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">13. Suspensão e encerramento</h2>
            <LegalResumo>
              podemos encerrar contas que violem estes Termos. Em casos leves, avisamos antes.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">13.1.</strong> Podemos suspender ou encerrar o acesso de contas que violem estes Termos, especialmente as hipóteses da Seção 11.</p>
              <p><strong className="text-primary-text font-semibold">13.2.</strong> Em violações que não envolvam risco imediato a terceiros, à segurança do serviço ou à legalidade, <strong className="text-primary-text font-semibold">notificaremos previamente</strong> e daremos oportunidade de correção.</p>
              <p><strong className="text-primary-text font-semibold">13.3.</strong> Você pode encerrar sua conta a qualquer momento, sem justificativa, pelo próprio aplicativo.</p>
              <p><strong className="text-primary-text font-semibold">13.4.</strong> Em caso de encerramento por nossa iniciativa sem violação sua, reembolsaremos proporcionalmente o período pago e não usufruído.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">14. Limitação de responsabilidade</h2>
            <LegalResumo>
              respondemos pelo que é nosso — o funcionamento do aplicativo. Não respondemos pelo hotel que cancelou nem pelo museu que fechou.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">14.1.</strong> Respondemos pelos defeitos na prestação do nosso serviço nos termos do Código de Defesa do Consumidor. Nada nestes Termos afasta direitos que a lei garante a você.</p>
              <p><strong className="text-primary-text font-semibold">14.2.</strong> <strong className="text-primary-text font-semibold">Não somos responsáveis</strong> por: atos, omissões, cancelamentos, overbooking ou falhas de fornecedores terceiros; decisões que você tome com base em sugestões geradas por IA sem verificação nas fontes oficiais; alterações de horário, preço, disponibilidade ou regras locais; indeferimento de visto, negativa de embarque ou impedimento de entrada; eventos de força maior, incluindo desastres naturais, greves e instabilidades geopolíticas.</p>
              <p><strong className="text-primary-text font-semibold">14.3.</strong> O serviço é fornecido em regime de melhores esforços quanto à disponibilidade. Podemos realizar manutenções e atualizações, buscando o menor impacto possível.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">15. Alterações destes Termos</h2>
            <LegalResumo>
              se mudarmos algo relevante, avisamos com 30 dias de antecedência.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">15.1.</strong> Podemos alterar estes Termos para refletir mudanças no serviço, na legislação ou em nossos parceiros.</p>
              <p><strong className="text-primary-text font-semibold">15.2.</strong> Alterações <strong className="text-primary-text font-semibold">materiais</strong> — que afetem preços, direitos, obrigações ou o escopo do serviço — serão comunicadas por e-mail e no aplicativo com pelo menos <strong className="text-primary-text font-semibold">30 dias de antecedência</strong>.</p>
              <p><strong className="text-primary-text font-semibold">15.3.</strong> Se você não concordar com a nova versão, pode encerrar a conta antes da entrada em vigor, com reembolso proporcional de período pago e não usufruído.</p>
              <p><strong className="text-primary-text font-semibold">15.4.</strong> Mantemos o histórico de versões disponível para consulta.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">16. Privacidade</h2>
            <p className="text-secondary-text">
              O tratamento dos seus dados pessoais está descrito na <Link href="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>, que integra estes Termos e está disponível em trix.travel/privacidade.
            </p>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">17. Atendimento</h2>
            <div className="space-y-1 text-secondary-text">
              <p>Canal oficial: <a href="mailto:contato@trix.travel" className="text-primary hover:underline">contato@trix.travel</a></p>
              <p>Prazo de resposta: até 5 (cinco) dias úteis.</p>
              <p>Assuntos de proteção de dados: <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a>, com prazo de até 15 (quinze) dias.</p>
              <p>Encarregado pelo Tratamento de Dados Pessoais (DPO): Paulo Pena — <a href="mailto:pena@trix.travel" className="text-primary hover:underline">pena@trix.travel</a></p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">18. Disposições finais</h2>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">18.1.</strong> Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
              <p><strong className="text-primary-text font-semibold">18.2.</strong> Fica eleito o <strong className="text-primary-text font-semibold">foro do domicílio do consumidor</strong> para dirimir controvérsias decorrentes destes Termos, conforme faculta a legislação consumerista.</p>
              <p><strong className="text-primary-text font-semibold">18.3.</strong> A invalidade de qualquer cláusula não afeta as demais.</p>
              <p><strong className="text-primary-text font-semibold">18.4.</strong> A tolerância quanto a eventual descumprimento não constitui novação nem renúncia de direitos.</p>
            </div>
          </section>
        </div>

        <p className="text-xs text-secondary-text mt-12 pt-6 border-t border-alternate">
          Documento gerado em 18 de agosto de 2026. Versão 1.0.
        </p>
      </main>

      <Link href="/" className="mt-8 inline-block text-primary font-semibold hover:underline">
        &larr; Voltar para a Home
      </Link>
    </div>
  );
}
