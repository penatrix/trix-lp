import React from 'react';
import Link from 'next/link';
import LegalResumo from '../../components/LegalResumo';

export default function Politica() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans text-primary-text">
      <main>
        <h1 className="font-outfit text-4xl md:text-5xl font-bold mb-2 text-primary-text">Política de Privacidade</h1>
        <p className="text-sm text-secondary-text mb-10">Versão 1.0 — vigente a partir de 18 de agosto de 2026</p>

        <div className="space-y-4 text-sm md:text-base leading-relaxed mb-10">
          <p className="text-secondary-text">
            Esta Política explica quais dados pessoais coletamos, por que coletamos, com quem compartilhamos e o que você pode exigir de nós. Foi escrita para ser entendida — cada seção começa com um resumo simples.
          </p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">1. Quem é responsável pelos seus dados</h2>
            <LegalResumo>
              uma empresa brasileira, com endereço e CNPJ, e uma pessoa responsável por privacidade que você pode acionar.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p>
                <strong className="text-primary-text font-semibold">Controlador dos dados:</strong>
                <br />
                PAULO CAIRES PENA PESSOA JUNIOR TECNOLOGIA DA INFORMAÇÃO LTDA
                <br />
                CNPJ 67.944.832/0001-37
                <br />
                Rua Visconde do Rio Branco, 1488, Conj. 909, Centro, Curitiba/PR, CEP 80.420-210
                <br />
                Nome fantasia: Trix Travel
              </p>
              <p>
                <strong className="text-primary-text font-semibold">Encarregado pelo Tratamento de Dados Pessoais (DPO):</strong>
                <br />
                Paulo Pena — <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a>
              </p>
              <p>
                Esta Política segue a <strong className="text-primary-text font-semibold">Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>, o <strong className="text-primary-text font-semibold">Marco Civil da Internet (Lei nº 12.965/2014)</strong> e o <strong className="text-primary-text font-semibold">Código de Defesa do Consumidor</strong>.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">2. Quais dados coletamos</h2>
            <LegalResumo>
              o que você digita (e-mail, preferências de viagem), o que o app registra automaticamente (IP, dispositivo) e o que a IA aprende sobre seu estilo de viajar.
            </LegalResumo>
            <div className="space-y-5 text-secondary-text">
              <div>
                <h3 className="font-semibold text-primary-text mb-2">2.1. Dados que você fornece</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-primary-bg text-primary-text">
                        <th className="border border-alternate px-4 py-2 text-left font-semibold">Categoria</th>
                        <th className="border border-alternate px-4 py-2 text-left font-semibold">Dados</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Cadastro</td>
                        <td className="border border-alternate px-4 py-2">E-mail, senha (armazenada de forma cifrada, nunca em texto legível)</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Perfil (opcional)</td>
                        <td className="border border-alternate px-4 py-2">Primeiro nome, foto de perfil, data de nascimento, gênero, cidade de origem</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Preferências de viagem</td>
                        <td className="border border-alternate px-4 py-2">Estilo de viagem, ritmo, faixa de orçamento, interesses (&quot;vibes&quot;)</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Roteiros</td>
                        <td className="border border-alternate px-4 py-2">Destinos, datas, número de viajantes, orçamento estimado e realizado, pedidos especiais, checklists, atividades adicionadas ou removidas</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Comunicação</td>
                        <td className="border border-alternate px-4 py-2">Conteúdo das mensagens que você nos envia</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Lista de espera</td>
                        <td className="border border-alternate px-4 py-2">E-mail informado no site</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-primary-text mb-2">2.2. Dados coletados automaticamente</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-primary-bg text-primary-text">
                        <th className="border border-alternate px-4 py-2 text-left font-semibold">Categoria</th>
                        <th className="border border-alternate px-4 py-2 text-left font-semibold">Dados</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Registros de acesso</td>
                        <td className="border border-alternate px-4 py-2">Endereço IP, data e hora de conexão, identificação do navegador ou dispositivo (user agent)</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Uso do serviço</td>
                        <td className="border border-alternate px-4 py-2">Roteiros gerados, funcionalidades acessadas, consumo de processamento por solicitação</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Diagnóstico</td>
                        <td className="border border-alternate px-4 py-2">Registros técnicos de erro, para identificar e corrigir falhas</td>
                      </tr>
                      <tr>
                        <td className="border border-alternate px-4 py-2">Site</td>
                        <td className="border border-alternate px-4 py-2">Dados de navegação coletados por ferramenta de análise (ver Seção 7)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-primary-text mb-2">2.3. Travel DNA — o que a IA aprende sobre você</h3>
                <p>
                  Conforme você aceita, substitui, remove ou favorita atividades, o sistema atualiza automaticamente um perfil de preferências: coisas que você tende a gostar, coisas que tende a evitar, ritmo preferido e estilo de viagem. Chamamos isso de <strong className="text-primary-text font-semibold">Travel DNA</strong>, e ele serve para que os próximos roteiros exijam menos correções suas.
                </p>
                <p className="mt-2">A Seção 4 explica em detalhe como esse perfil funciona e como desativá-lo.</p>
              </div>

              <div>
                <h3 className="font-semibold text-primary-text mb-2">2.4. Dados que NÃO coletamos</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-primary-text font-semibold">Dados de pagamento.</strong> Compras são processadas integralmente pela App Store ou pela Google Play. Nunca temos acesso ao seu cartão, conta bancária ou meio de pagamento.</li>
                  <li><strong className="text-primary-text font-semibold">Localização em tempo real.</strong> Não rastreamos onde você está. Quando o roteiro abre um endereço no mapa, isso acontece no aplicativo de mapas do seu aparelho, fora do nosso alcance.</li>
                  <li><strong className="text-primary-text font-semibold">Contatos, agenda, fotos ou mensagens do seu dispositivo.</strong></li>
                  <li><strong className="text-primary-text font-semibold">Dados de terceiros.</strong> Não compramos listas nem enriquecemos seu cadastro com bases externas.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-primary-text mb-2">2.5. Dados sensíveis</h3>
                <p>
                  Não solicitamos e não temos interesse em dados sensíveis — origem racial, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa, dados de saúde ou de vida sexual.
                </p>
                <p className="mt-2">
                  Alguns campos de preferência poderiam, em tese, revelar informação dessa natureza. Por isso, adotamos uma medida preventiva: as preferências são estruturadas em <strong className="text-primary-text font-semibold">opções pré-definidas e fechadas</strong>, sem campo de texto livre nessas categorias, e o sistema <strong className="text-primary-text font-semibold">não infere automaticamente</strong> informações dessa natureza a partir do seu comportamento.
                </p>
                <p className="mt-2">
                  Se, ainda assim, você escrever espontaneamente uma informação sensível em um pedido especial, ela será tratada apenas para gerar aquele roteiro e será eliminada junto com ele. Pedimos que evite fazê-lo.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">3. Por que usamos seus dados e com qual base legal</h2>
            <LegalResumo>
              cada uso tem uma justificativa legal. Marketing só com sua autorização; o resto é o mínimo para o serviço funcionar.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-bg text-primary-text">
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Finalidade</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Dados usados</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Base legal (LGPD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Criar e manter sua conta, autenticar acesso</td>
                      <td className="border border-alternate px-4 py-2">Cadastro, registros de acesso</td>
                      <td className="border border-alternate px-4 py-2">Execução de contrato — art. 7º, V</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Gerar, salvar, editar e compartilhar roteiros</td>
                      <td className="border border-alternate px-4 py-2">Perfil, preferências, roteiros</td>
                      <td className="border border-alternate px-4 py-2">Execução de contrato — art. 7º, V</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Personalizar sugestões (Travel DNA)</td>
                      <td className="border border-alternate px-4 py-2">Preferências, interações com atividades</td>
                      <td className="border border-alternate px-4 py-2">Legítimo interesse — art. 7º, IX (com opção de desativar)</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Suporte e atendimento</td>
                      <td className="border border-alternate px-4 py-2">Cadastro, comunicação, diagnóstico</td>
                      <td className="border border-alternate px-4 py-2">Execução de contrato — art. 7º, V</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Prevenir fraude, abuso e uso indevido de promoções</td>
                      <td className="border border-alternate px-4 py-2">Registros de acesso, dados de uso</td>
                      <td className="border border-alternate px-4 py-2">Legítimo interesse — art. 7º, IX</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Segurança da informação e correção de falhas</td>
                      <td className="border border-alternate px-4 py-2">Registros de acesso, diagnóstico</td>
                      <td className="border border-alternate px-4 py-2">Legítimo interesse — art. 7º, IX</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Medir uso e melhorar o produto</td>
                      <td className="border border-alternate px-4 py-2">Dados de uso, preferencialmente agregados</td>
                      <td className="border border-alternate px-4 py-2">Legítimo interesse — art. 7º, IX</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Guardar registros de acesso à aplicação</td>
                      <td className="border border-alternate px-4 py-2">IP, data e hora</td>
                      <td className="border border-alternate px-4 py-2">Obrigação legal — art. 7º, II c/c art. 15 do Marco Civil</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Cumprir obrigações fiscais e contábeis</td>
                      <td className="border border-alternate px-4 py-2">Registros de transação</td>
                      <td className="border border-alternate px-4 py-2">Obrigação legal — art. 7º, II</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Avisar sobre o lançamento do produto (lista de espera)</td>
                      <td className="border border-alternate px-4 py-2">E-mail</td>
                      <td className="border border-alternate px-4 py-2">Legítimo interesse — art. 7º, IX (finalidade da própria lista de espera)</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Enviar conteúdo adicional sobre viagens e outras novidades</td>
                      <td className="border border-alternate px-4 py-2">E-mail, primeiro nome</td>
                      <td className="border border-alternate px-4 py-2">Consentimento — art. 7º, I</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Exercer direitos em processo</td>
                      <td className="border border-alternate px-4 py-2">Conforme necessário</td>
                      <td className="border border-alternate px-4 py-2">Art. 7º, VI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong className="text-primary-text font-semibold">Sobre o legítimo interesse:</strong> avaliamos, em cada caso, se o benefício é proporcional e se suas expectativas legítimas são respeitadas. Você pode se opor a qualquer tratamento fundado em legítimo interesse escrevendo para <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a>.</p>
              <p><strong className="text-primary-text font-semibold">Comunicações operacionais</strong> — confirmação de conta, redefinição de senha, aviso de mudança nos Termos, recibo — não são marketing e são enviadas independentemente de consentimento, porque são necessárias ao serviço.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">4. Inteligência artificial, personalização e decisões automatizadas</h2>
            <LegalResumo>
              os roteiros são feitos por IA. O sistema aprende suas preferências para melhorar. Nenhuma decisão automatizada afeta seus direitos, e você pode desligar o aprendizado.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">4.1.</strong> Para gerar um roteiro, enviamos a um modelo de inteligência artificial de terceiro um conjunto estruturado com destino, datas, número de viajantes, faixa de orçamento, ritmo, interesses e eventuais pedidos especiais.</p>
              <p><strong className="text-primary-text font-semibold">4.2.</strong> <strong className="text-primary-text font-semibold">Contratamos o serviço de IA em modalidade corporativa paga, cujos termos vedam o uso do conteúdo enviado para treinar modelos do fornecedor.</strong> Seus dados alimentam a geração do seu roteiro, não o produto de outra empresa.</p>
              <p><strong className="text-primary-text font-semibold">4.3.</strong> <strong className="text-primary-text font-semibold">Não treinamos modelos próprios</strong> com dados de usuários.</p>
              <p><strong className="text-primary-text font-semibold">4.4. Travel DNA.</strong> O sistema mantém um perfil de preferências atualizado automaticamente a partir das suas interações com as atividades sugeridas. A finalidade é reduzir o retrabalho: quanto mais o Trix entende seu estilo, menos você precisa corrigir.</p>
              <div>
                <p><strong className="text-primary-text font-semibold">4.5. Seus controles sobre o Travel DNA.</strong> Você pode, a qualquer momento:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong className="text-primary-text font-semibold">consultar</strong> o que o sistema registrou sobre suas preferências;</li>
                  <li><strong className="text-primary-text font-semibold">corrigir ou apagar</strong> entradas específicas;</li>
                  <li><strong className="text-primary-text font-semibold">desativar</strong> a atualização automática, mantendo o serviço funcionando com as preferências que você declarar manualmente.</li>
                </ul>
              </div>
              <p>Enquanto essas opções não estiverem disponíveis diretamente no aplicativo, atendemos ao pedido por <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a> em até 15 dias.</p>
              <p><strong className="text-primary-text font-semibold">4.6. Decisões automatizadas.</strong> Nenhum processamento automatizado é utilizado para negar acesso, definir preço individual, avaliar crédito, classificar você por risco ou produzir qualquer efeito sobre seus direitos. A automação existe apenas para <strong className="text-primary-text font-semibold">sugerir conteúdo de viagem</strong>, e toda sugestão pode ser editada, substituída ou descartada por você.</p>
              <p><strong className="text-primary-text font-semibold">4.7.</strong> Ainda assim, nos termos do art. 20 da LGPD, você pode solicitar revisão de qualquer tratamento automatizado que entenda tê-lo afetado, e responderemos com explicação sobre os critérios utilizados.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">5. Com quem compartilhamos seus dados</h2>
            <LegalResumo>
              não vendemos dados. Compartilhamos só com fornecedores que fazem o serviço funcionar, e cada um recebe o mínimo necessário.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">Não vendemos, alugamos ou cedemos seus dados pessoais para fins comerciais de terceiros.</strong></p>
              <p>Utilizamos fornecedores que atuam como <strong className="text-primary-text font-semibold">operadores</strong>, seguindo nossas instruções e obrigados contratualmente à confidencialidade:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-bg text-primary-text">
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Fornecedor</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Função</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Dados que acessa</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Supabase</td>
                      <td className="border border-alternate px-4 py-2">Banco de dados, autenticação, armazenamento de arquivos, e-mails transacionais</td>
                      <td className="border border-alternate px-4 py-2">Cadastro, perfil, roteiros, registros de acesso</td>
                      <td className="border border-alternate px-4 py-2">EUA (Oregon)</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Google Cloud Platform</td>
                      <td className="border border-alternate px-4 py-2">Processamento das solicitações de geração</td>
                      <td className="border border-alternate px-4 py-2">Dados enviados para gerar o roteiro</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Google (API de IA generativa)</td>
                      <td className="border border-alternate px-4 py-2">Geração dos roteiros</td>
                      <td className="border border-alternate px-4 py-2">Preferências e parâmetros da viagem</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Google Maps / Places</td>
                      <td className="border border-alternate px-4 py-2">Busca e validação de locais</td>
                      <td className="border border-alternate px-4 py-2">Termos de busca de destinos e locais</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Vercel</td>
                      <td className="border border-alternate px-4 py-2">Hospedagem do site e da aplicação web</td>
                      <td className="border border-alternate px-4 py-2">Registros técnicos de acesso</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Google Analytics</td>
                      <td className="border border-alternate px-4 py-2">Análise de navegação no site</td>
                      <td className="border border-alternate px-4 py-2">Dados de navegação (ver Seção 7)</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Loops</td>
                      <td className="border border-alternate px-4 py-2">Envio de e-mails de marketing</td>
                      <td className="border border-alternate px-4 py-2">E-mail e primeiro nome, apenas com consentimento</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Apple / Google Play</td>
                      <td className="border border-alternate px-4 py-2">Processamento de pagamentos</td>
                      <td className="border border-alternate px-4 py-2">Dados de pagamento, aos quais não temos acesso</td>
                      <td className="border border-alternate px-4 py-2">EUA</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Travelpayouts</td>
                      <td className="border border-alternate px-4 py-2">Rede de links de afiliados</td>
                      <td className="border border-alternate px-4 py-2">Identificador do roteiro, sem dados que identifiquem você</td>
                      <td className="border border-alternate px-4 py-2">Exterior</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Também podemos compartilhar dados quando houver <strong className="text-primary-text font-semibold">obrigação legal, ordem judicial ou requisição de autoridade competente</strong>, e em caso de reorganização societária, hipótese em que o adquirente ficará sujeito a esta Política e você será comunicado.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">6. Transferência internacional</h2>
            <LegalResumo>
              nossos servidores ficam nos Estados Unidos. Isso é normal e permitido, com as garantias adequadas.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p>Nossa infraestrutura opera em servidores localizados nos <strong className="text-primary-text font-semibold">Estados Unidos</strong>, e os fornecedores listados na Seção 5 processam dados fora do Brasil.</p>
              <p>Essas transferências são realizadas nos termos dos arts. 33 a 36 da LGPD, com base em <strong className="text-primary-text font-semibold">cláusulas contratuais específicas de proteção de dados firmadas com cada fornecedor</strong>, que impõem padrão de proteção compatível com a legislação brasileira.</p>
              <p>Você pode solicitar informações sobre as garantias adotadas em <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a>.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">7. Cookies e ferramentas de análise</h2>
            <LegalResumo>
              o site usa Google Analytics. Você pode recusar. O aplicativo não usa rastreadores de terceiros.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">7.1. No site (trix.travel).</strong> Utilizamos cookies estritamente necessários ao funcionamento e, mediante seu consentimento, o <strong className="text-primary-text font-semibold">Google Analytics</strong> para entender de forma agregada como as pessoas encontram e navegam pelo site.</p>
              <p><strong className="text-primary-text font-semibold">7.2.</strong> Ao acessar o site pela primeira vez, você verá um aviso permitindo <strong className="text-primary-text font-semibold">aceitar ou recusar</strong> os cookies de análise. Recusar não prejudica o uso do site. Você pode alterar sua escolha a qualquer momento no rodapé.</p>
              <p><strong className="text-primary-text font-semibold">7.3. No aplicativo.</strong> Não utilizamos SDKs de publicidade, pixels de redes sociais ou rastreadores de terceiros. As métricas de uso do aplicativo são apuradas internamente, a partir do nosso próprio banco de dados.</p>
              <p><strong className="text-primary-text font-semibold">7.4.</strong> Não realizamos rastreamento entre aplicativos ou sites de terceiros e não vendemos dados para fins publicitários.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">8. Por quanto tempo guardamos</h2>
            <LegalResumo>
              enquanto sua conta existir. Depois disso, apagamos — com poucas exceções que a lei exige.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-bg text-primary-text">
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Dado</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Prazo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Conta, perfil e preferências</td>
                      <td className="border border-alternate px-4 py-2">Enquanto a conta estiver ativa</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Roteiros e dados associados, incluindo os parâmetros usados para gerá-los</td>
                      <td className="border border-alternate px-4 py-2">Enquanto o roteiro existir; eliminados ao excluir o roteiro ou a conta</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Lista de espera</td>
                      <td className="border border-alternate px-4 py-2">Até a conversão em conta, o pedido de remoção, ou 24 meses sem interação</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Registros de acesso à aplicação (IP, data e hora)</td>
                      <td className="border border-alternate px-4 py-2">6 meses, por exigência do art. 15 do Marco Civil da Internet</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Registros de transação</td>
                      <td className="border border-alternate px-4 py-2">5 anos, por exigência fiscal e contábil</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Comunicações de suporte</td>
                      <td className="border border-alternate px-4 py-2">2 anos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong className="text-primary-text font-semibold">Sobre a exclusão:</strong> ao excluir sua conta ou um roteiro, os dados são removidos da nossa base de forma imediata, permanente e irreversível. Não mantemos cópias em base secundária para fins de recuperação, e não há como restaurar dados excluídos — nem a seu pedido.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">9. Seus direitos</h2>
            <LegalResumo>
              você pode ver, corrigir, levar embora e apagar seus dados. É só pedir, e respondemos em até 15 dias.
            </LegalResumo>
            <div className="space-y-3 text-secondary-text">
              <p>A LGPD garante a você os seguintes direitos:</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary-bg text-primary-text">
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">Direito</th>
                      <th className="border border-alternate px-4 py-2 text-left font-semibold">O que significa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Confirmação</td>
                      <td className="border border-alternate px-4 py-2">Saber se tratamos dados seus</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Acesso</td>
                      <td className="border border-alternate px-4 py-2">Obter cópia dos seus dados</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Correção</td>
                      <td className="border border-alternate px-4 py-2">Corrigir dados incompletos, inexatos ou desatualizados</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Anonimização, bloqueio ou eliminação</td>
                      <td className="border border-alternate px-4 py-2">Pedir a remoção de dados desnecessários, excessivos ou tratados em desconformidade</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Portabilidade</td>
                      <td className="border border-alternate px-4 py-2">Receber seus dados em formato estruturado e legível por máquina</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Eliminação</td>
                      <td className="border border-alternate px-4 py-2">Apagar dados tratados com base em consentimento</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Informação sobre compartilhamento</td>
                      <td className="border border-alternate px-4 py-2">Saber com quem compartilhamos</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Informação sobre consentimento</td>
                      <td className="border border-alternate px-4 py-2">Saber que pode negar consentimento e quais as consequências</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Revogação</td>
                      <td className="border border-alternate px-4 py-2">Retirar consentimento a qualquer momento</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Oposição</td>
                      <td className="border border-alternate px-4 py-2">Opor-se a tratamento fundado em legítimo interesse</td>
                    </tr>
                    <tr>
                      <td className="border border-alternate px-4 py-2">Revisão</td>
                      <td className="border border-alternate px-4 py-2">Solicitar revisão de decisões automatizadas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong className="text-primary-text font-semibold">Como exercer:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-primary-text font-semibold">Exclusão da conta e de todos os dados:</strong> direto no menu de configurações do aplicativo, a qualquer momento, sem precisar falar conosco.</li>
                <li><strong className="text-primary-text font-semibold">Descadastramento de marketing:</strong> link em todos os e-mails que enviamos.</li>
                <li><strong className="text-primary-text font-semibold">Demais direitos, incluindo portabilidade:</strong> escreva para <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a>. Respondemos em até <strong className="text-primary-text font-semibold">15 dias</strong>. Podemos solicitar confirmação de identidade antes de atender, para proteger sua conta.</li>
              </ul>
              <p>Você também pode apresentar reclamação à <strong className="text-primary-text font-semibold">Autoridade Nacional de Proteção de Dados (ANPD)</strong> — gov.br/anpd.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">10. Segurança</h2>
            <LegalResumo>
              o que fazemos de concreto para proteger sua conta.
            </LegalResumo>
            <div className="text-secondary-text">
              <ul className="list-disc pl-5 space-y-1">
                <li>Comunicação cifrada em trânsito (TLS) entre o aplicativo e nossos servidores;</li>
                <li>Senhas armazenadas com algoritmo de hash, nunca em texto legível;</li>
                <li>Verificação contra senhas expostas em vazamentos públicos no momento do cadastro;</li>
                <li>Confirmação de endereço de e-mail;</li>
                <li>Isolamento de dados por usuário no banco de dados, de modo que cada conta só acessa os próprios registros;</li>
                <li>Autenticação em duas etapas disponível;</li>
                <li>Acesso administrativo restrito e registrado.</li>
              </ul>
              <p className="mt-3">Nenhum sistema é totalmente imune. Recomendamos senha exclusiva e forte, ativação da autenticação em duas etapas e cautela em dispositivos compartilhados.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">11. Incidentes de segurança</h2>
            <p className="text-secondary-text">
              Se ocorrer incidente de segurança que possa acarretar risco ou dano relevante a você, comunicaremos a ANPD e os titulares afetados em prazo razoável, informando a natureza dos dados envolvidos, os riscos, as medidas adotadas e o que você pode fazer.
            </p>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">12. Menores de 18 anos</h2>
            <div className="space-y-3 text-secondary-text">
              <p>O Trix Travel é destinado exclusivamente a maiores de 18 anos. Não coletamos intencionalmente dados de crianças e adolescentes.</p>
              <p>Se tomarmos conhecimento de conta pertencente a menor de 18 anos, ela será encerrada e os dados eliminados. Responsáveis que identifiquem essa situação podem nos acionar em <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a> para eliminação imediata.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">13. Alterações nesta Política</h2>
            <div className="space-y-3 text-secondary-text">
              <p>Podemos atualizar esta Política. Alterações <strong className="text-primary-text font-semibold">materiais</strong> — nova finalidade, nova base legal, novo compartilhamento relevante — serão comunicadas por e-mail e no aplicativo com <strong className="text-primary-text font-semibold">30 dias de antecedência</strong>.</p>
              <p>A data de vigência e o número da versão constam no topo do documento. Mantemos o histórico de versões disponível para consulta.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-alternate">
            <h2 className="font-outfit text-2xl font-bold text-primary-text mb-3">14. Fale conosco</h2>
            <div className="space-y-1 text-secondary-text">
              <p><strong className="text-primary-text font-semibold">Privacidade e proteção de dados:</strong> <a href="mailto:privacidade@trix.travel" className="text-primary hover:underline">privacidade@trix.travel</a></p>
              <p><strong className="text-primary-text font-semibold">Encarregado (DPO):</strong> Paulo Pena</p>
              <p><strong className="text-primary-text font-semibold">Atendimento geral:</strong> <a href="mailto:contato@trix.travel" className="text-primary hover:underline">contato@trix.travel</a></p>
              <p><strong className="text-primary-text font-semibold">Endereço:</strong> Rua Visconde do Rio Branco, 1488, Conj. 909, Centro, Curitiba/PR, CEP 80.420-210</p>
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
