import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import LegalResumo from '../../../components/LegalResumo';

/**
 * A Política de Privacidade em inglês (11/11). A App Store pede a URL da
 * política em cada idioma da ficha, e as fichas em inglês (EUA e Reino
 * Unido) entraram com a 1.0.6.
 *
 * É tradução fiel da versão 1.2 em português (`app/privacidade`), na
 * mesma estrutura e numeração, e diz no topo que a versão em português
 * prevalece. Mudou uma, mude a outra: as duas levam o mesmo número de
 * versão e a mesma data.
 */
export const metadata: Metadata = {
  title: 'Privacy Policy | Trix',
  description: 'What personal data Trix collects, why, who it is shared with and what you can ask of us.',
  alternates: {
    canonical: '/en/privacy',
    languages: { 'pt-BR': '/privacidade', en: '/en/privacy' },
  },
};

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-neutro-950 font-semibold">{children}</strong>
);

const Email = () => (
  <a href="mailto:privacidade@trix.travel" className="text-terracota-700 hover:underline">
    privacidade@trix.travel
  </a>
);

function Tabela({ cabecalho, linhas }: { cabecalho: string[]; linhas: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-neutro-100 text-neutro-950">
            {cabecalho.map((c) => (
              <th key={c} className="border border-neutro-300 px-4 py-2 text-left font-semibold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha) => (
            <tr key={linha[0]}>
              {linha.map((celula, i) => (
                <td key={i} className="border border-neutro-300 px-4 py-2">
                  {celula}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Titulo = ({ children }: { children: React.ReactNode }) => (
  <h2 className="titulo-secao text-2xl font-bold text-neutro-950 mb-3">{children}</h2>
);

const Resumo = ({ children }: { children: React.ReactNode }) => (
  <LegalResumo idioma="en">{children}</LegalResumo>
);

export default function PrivacyPolicy() {
  return (
    <div lang="en" className="max-w-4xl mx-auto px-6 py-20 font-sans text-neutro-950">
      <main>
        <h1 className="titulo-secao text-4xl md:text-5xl font-bold mb-2 text-neutro-950">Privacy Policy</h1>
        <p className="text-sm text-neutro-600 mb-10">Version 1.2 — effective from 21 October 2026</p>

        <div className="space-y-4 text-sm md:text-base leading-relaxed mb-10">
          <p className="text-neutro-600">
            This Policy explains what personal data we collect, why we collect it, who we share it with and what you can ask of us. It was written to be understood — each section starts with a plain summary.
          </p>
          <p className="text-neutro-600">
            This is an English translation of the{' '}
            <Link href="/privacidade" className="text-terracota-700 hover:underline">
              Portuguese version
            </Link>
            . If the two differ, the Portuguese version prevails.
          </p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
          <section>
            <Titulo>1. Who is responsible for your data</Titulo>
            <Resumo>a Brazilian company, with a registered address and tax ID, and a privacy officer you can contact.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <p>
                <B>Data controller:</B>
                <br />
                PAULO CAIRES PENA PESSOA JUNIOR TECNOLOGIA DA INFORMAÇÃO LTDA
                <br />
                CNPJ (Brazilian company ID) 67.944.832/0001-37
                <br />
                Rua Visconde do Rio Branco, 1488, Conj. 909, Centro, Curitiba/PR, CEP 80.420-210, Brazil
                <br />
                Trading name: Trix Travel
              </p>
              <p>
                <B>Data Protection Officer (DPO):</B>
                <br />
                Paulo Pena — <Email />
              </p>
              <p>
                This Policy follows Brazil’s <B>General Data Protection Law (LGPD, Law No. 13,709/2018)</B>, the <B>Brazilian Civil Rights Framework for the Internet (Marco Civil da Internet, Law No. 12,965/2014)</B> and the <B>Brazilian Consumer Protection Code</B>.
              </p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>2. What data we collect</Titulo>
            <Resumo>what you type (email, travel preferences), what the app records automatically (IP, device) and what the AI learns about your travel style.</Resumo>
            <div className="space-y-5 text-neutro-600">
              <div>
                <h3 className="font-semibold text-neutro-950 mb-2">2.1. Data you provide</h3>
                <Tabela
                  cabecalho={['Category', 'Data']}
                  linhas={[
                    ['Sign-up', 'Email, password (stored encrypted, never in readable text)'],
                    ['Profile (optional)', 'First name, phone number, avatar chosen from the app’s own illustrations, date of birth, gender, home city'],
                    ['Travel preferences', 'Travel style, pace, budget range, interests (“vibes”)'],
                    ['Itineraries', 'Destinations, dates, number of travellers, estimated and actual budget, special requests, checklists, activities added or removed'],
                    ['Communication', 'Content of the messages you send us'],
                    ['Waiting list', 'Email given on the website'],
                  ]}
                />
              </div>

              <div>
                <h3 className="font-semibold text-neutro-950 mb-2">2.2. Data collected automatically</h3>
                <Tabela
                  cabecalho={['Category', 'Data']}
                  linhas={[
                    ['Access logs', 'IP address, date and time of connection, browser or device identification (user agent)'],
                    ['Use of the service', 'Itineraries generated, features accessed, processing used per request'],
                    ['Diagnostics', 'Technical error logs, to find and fix faults'],
                    ['Website', 'Browsing data collected by an analytics tool (see Section 7)'],
                  ]}
                />
              </div>

              <div>
                <h3 className="font-semibold text-neutro-950 mb-2">2.3. Travel DNA — what the AI learns about you</h3>
                <p>
                  As you accept, replace, remove or favourite activities, the system automatically updates a preference profile: things you tend to like, things you tend to avoid, preferred pace and travel style. We call this <B>Travel DNA</B>, and it exists so that your next itineraries need fewer corrections from you.
                </p>
                <p className="mt-2">Section 4 explains in detail how this profile works and how to turn it off.</p>
              </div>

              <div>
                <h3 className="font-semibold text-neutro-950 mb-2">2.4. Data we do NOT collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><B>Payment data.</B> Purchases are processed entirely by the App Store or Google Play. We never have access to your card, bank account or payment method.</li>
                  <li><B>Real-time location.</B> We do not track where you are. When the itinerary opens an address on a map, that happens in your device’s maps app, outside our reach.</li>
                  <li><B>Contacts, calendar, photos or messages on your device.</B></li>
                  <li><B>Third-party data.</B> We do not buy lists or enrich your account with external databases.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-neutro-950 mb-2">2.5. Sensitive data</h3>
                <p>
                  We do not ask for, and have no interest in, sensitive data — racial origin, religious belief, political opinion, membership of a trade union or religious organisation, health data or data about sex life.
                </p>
                <p className="mt-2">
                  Some preference fields could, in theory, reveal information of this kind. So we take a preventive measure: preferences are structured as <B>closed, predefined options</B>, with no free-text field in these categories, and the system <B>does not automatically infer</B> information of this kind from your behaviour.
                </p>
                <p className="mt-2">
                  If you nevertheless volunteer sensitive information in a special request, it will be processed only to generate that itinerary and will be deleted together with it. We ask you to avoid doing so.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>3. Why we use your data, and on what legal basis</Titulo>
            <Resumo>each use has a legal justification. Marketing only with your permission; the rest is the minimum the service needs to work.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <Tabela
                cabecalho={['Purpose', 'Data used', 'Legal basis (LGPD)']}
                linhas={[
                  ['Create and maintain your account, authenticate access', 'Sign-up, access logs', 'Performance of a contract — art. 7, V'],
                  ['Generate, save, edit and share itineraries', 'Profile, preferences, itineraries', 'Performance of a contract — art. 7, V'],
                  ['Personalise suggestions (Travel DNA)', 'Preferences, interactions with activities', 'Legitimate interest — art. 7, IX (with an option to turn it off)'],
                  ['Support and customer service', 'Sign-up, communication, diagnostics', 'Performance of a contract — art. 7, V'],
                  ['Notify you about your account and your itinerary', 'Email, phone number', 'Performance of a contract — art. 7, V'],
                  ['Link the account to a phone number, as a security factor', 'Phone number', 'Legitimate interest — art. 7, IX'],
                  ['Prevent fraud, abuse and misuse of promotions', 'Access logs, usage data', 'Legitimate interest — art. 7, IX'],
                  ['Information security and fixing faults', 'Access logs, diagnostics', 'Legitimate interest — art. 7, IX'],
                  ['Measure usage and improve the product', 'Usage data, preferably aggregated', 'Legitimate interest — art. 7, IX'],
                  ['Keep application access logs', 'IP, date and time', 'Legal obligation — art. 7, II, together with art. 15 of the Marco Civil da Internet'],
                  ['Meet tax and accounting obligations', 'Transaction records', 'Legal obligation — art. 7, II'],
                  ['Announce the product launch (waiting list)', 'Email', 'Legitimate interest — art. 7, IX (the purpose of the waiting list itself)'],
                  ['Send additional travel content and other news', 'Email, first name', 'Consent — art. 7, I'],
                  ['Exercise rights in legal proceedings', 'As necessary', 'Art. 7, VI'],
                ]}
              />
              <p><B>About legitimate interest:</B> in each case we assess whether the benefit is proportionate and whether your legitimate expectations are respected. You can object to any processing based on legitimate interest by writing to <Email />.</p>
              <p><B>Operational communications</B> — account confirmation, password reset, notice of changes to the Terms, receipts — are not marketing and are sent regardless of consent, because the service needs them.</p>
              <p><B>About your phone number:</B> giving it is optional and the account works without it. We use the number for notices about your account and your itinerary and as a security factor, linking the account to a phone. <B>We do not send marketing by phone, SMS or messaging app without your express permission</B>, and you can delete the number at any time when editing your profile.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>4. Artificial intelligence, personalisation and automated decisions</Titulo>
            <Resumo>itineraries are made by AI. The system learns your preferences to get better. No automated decision affects your rights, and you can turn the learning off.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <p><B>4.1.</B> To generate an itinerary, we send a third-party artificial intelligence model a structured set with destination, dates, number of travellers, budget range, pace, interests and any special requests.</p>
              <p><B>4.2.</B> <B>We use the AI service under a paid business plan whose terms prohibit using the content we send to train the provider’s models.</B> Your data feeds the generation of your itinerary, not another company’s product.</p>
              <p><B>4.3.</B> <B>We do not train our own models</B> on user data.</p>
              <p><B>4.4. Travel DNA.</B> The system keeps a preference profile updated automatically from your interactions with the suggested activities. The purpose is to reduce rework: the better Trix understands your style, the less you need to correct.</p>
              <div>
                <p><B>4.5. Your controls over Travel DNA.</B> At any time, you can:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><B>see</B> what the system has recorded about your preferences;</li>
                  <li><B>correct or delete</B> specific entries;</li>
                  <li><B>turn off</B> the automatic updating, keeping the service working with the preferences you state manually.</li>
                </ul>
              </div>
              <p>Until these options are available directly in the app, we handle the request at <Email /> within 15 days.</p>
              <p><B>4.6. Automated decisions.</B> No automated processing is used to deny access, set individual prices, assess credit, rate you by risk or produce any effect on your rights. Automation exists only to <B>suggest travel content</B>, and every suggestion can be edited, replaced or discarded by you.</p>
              <p><B>4.7.</B> Even so, under art. 20 of the LGPD, you can request a review of any automated processing you believe has affected you, and we will reply with an explanation of the criteria used.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>5. Who we share your data with</Titulo>
            <Resumo>we do not sell data. We share it only with the providers that make the service work, and each receives the minimum necessary.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <p><B>We do not sell, rent or hand over your personal data for third parties’ commercial purposes.</B></p>
              <p>We use providers that act as <B>processors</B>, following our instructions and contractually bound to confidentiality:</p>
              <Tabela
                cabecalho={['Provider', 'Role', 'Data it accesses', 'Location']}
                linhas={[
                  ['Supabase', 'Database, authentication, file storage, transactional email', 'Sign-up, profile, itineraries, access logs', 'USA (Oregon)'],
                  ['Google Cloud Platform', 'Processing of generation requests', 'Data sent to generate the itinerary', 'USA'],
                  ['Google (generative AI API)', 'Generating itineraries', 'Preferences and trip parameters', 'USA'],
                  ['Google Maps / Places', 'Searching and validating places', 'Search terms for destinations and places', 'USA'],
                  ['Vercel', 'Hosting of the website and the web app', 'Technical access logs', 'USA'],
                  ['Google Analytics', 'Website browsing analytics', 'Browsing data (see Section 7)', 'USA'],
                  ['Mixpanel', 'App usage analytics', 'Usage events and technical identifiers (see Section 7)', 'European Union'],
                  ['Unsplash', 'Photos of destinations and of places in the itinerary', 'IP address and technical device data, when the photo loads; no account data', 'USA'],
                  ['Loops', 'Sending marketing emails', 'Email and first name, only with consent', 'USA'],
                  ['Apple / Google Play', 'In-app payment processing', 'Payment data, which we cannot access', 'USA'],
                  ['Stripe', 'Payment processing on the web (app.trix.travel)', 'Email and payment data, which we cannot access', 'USA'],
                  ['RevenueCat', 'Managing subscriptions and purchases, in the app and on the web', 'Account identifier, email for web purchases, and purchase history', 'USA'],
                  ['Travelpayouts', 'Affiliate link network', 'Itinerary identifier, with no data that identifies you', 'Outside Brazil'],
                ]}
              />
              <p>We may also share data when there is a <B>legal obligation, court order or request from a competent authority</B>, and in the event of a corporate reorganisation, in which case the acquirer will be bound by this Policy and you will be notified.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>6. International transfers</Titulo>
            <Resumo>our servers are in the United States. This is normal and allowed, with the appropriate safeguards.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <p>Our infrastructure runs on servers located in the <B>United States</B>, except for <B>Mixpanel</B>, whose data is kept in the <B>European Union</B>. All providers listed in Section 5 process data outside Brazil.</p>
              <p>These transfers are carried out under arts. 33 to 36 of the LGPD, based on <B>specific data protection contractual clauses signed with each provider</B>, which impose a level of protection compatible with Brazilian law.</p>
              <p>You can ask for information about the safeguards adopted at <Email />.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>7. Cookies and analytics tools</Titulo>
            <Resumo>the website uses Google Analytics and the app uses Mixpanel, both only to measure usage. You can refuse both: on the website, through the cookie notice; in the app, in Profile. Neither is used for advertising.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <p><B>7.1. On the website (trix.travel).</B> We use cookies strictly necessary for it to work and, with your consent, <B>Google Analytics</B> to understand, in aggregate, how people find and browse the website.</p>
              <p><B>7.2.</B> When you first visit the website, you will see a notice allowing you to <B>accept or decline</B> analytics cookies. Declining does not affect your use of the website. You can change your choice at any time in the footer.</p>
              <p><B>7.3. In the app.</B> We do not use advertising SDKs, social media pixels or any tracking for advertising purposes. We use <B>Mixpanel</B> to understand, in aggregate, how people move through the app: which steps they complete and where they give up.</p>
              <p><B>7.3.1. What is sent to Mixpanel.</B> Usage events — opening the app, completing a step, requesting an itinerary, reaching sign-up — and technical identifiers: a device identifier generated by us and, after login, your account identifier. <B>The content of your itineraries, the text you write, your name, your email and any account data are not sent.</B> The data is kept on servers in the European Union.</p>
              <p><B>7.3.2. Some metrics are still calculated internally.</B> Itinerary volume, processing cost and feature usage come from our own database, without going through third parties. Mixpanel covers what the database cannot see: the path taken before the itinerary exists.</p>
              <p><B>7.3.3.</B> This measurement relies on <B>legitimate interest</B> (art. 7, IX). The notice about it appears at sign-up, together with the Terms and this Policy, and the measurement can be turned off at any time in <B>Profile → Privacy and account → Measure app usage</B>. Anyone who refuses stops sending any event to Mixpanel from that moment on, with or without an account. To also delete the records already sent, write to <Email />.</p>
              <p><B>7.3.4.</B> When you delete your account, the device identifier used by Mixpanel is replaced with a new one, and later use of the app on that device is no longer associated with the deleted account.</p>
              <p><B>7.4.</B> We do not track you across third-party apps or websites and do not sell data for advertising purposes.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>8. How long we keep data</Titulo>
            <Resumo>for as long as your account exists. After that, we delete it — with a few exceptions required by law.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <Tabela
                cabecalho={['Data', 'Period']}
                linhas={[
                  ['Account, profile and preferences', 'While the account is active'],
                  ['Itineraries and associated data, including the parameters used to generate them', 'While the itinerary exists; deleted when you delete the itinerary or the account'],
                  ['Waiting list', 'Until it becomes an account, until you ask for removal, or after 24 months without interaction'],
                  ['Application access logs (IP, date and time)', '6 months, as required by art. 15 of the Marco Civil da Internet'],
                  ['Transaction records', '5 years, as required for tax and accounting purposes'],
                  ['Support communications', '2 years'],
                ]}
              />
              <p><B>About deletion:</B> when you delete your account or an itinerary, the data is removed from our database immediately, permanently and irreversibly. We keep no copies in a secondary database for recovery, and deleted data cannot be restored — not even at your request.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>9. Your rights</Titulo>
            <Resumo>you can see, correct, take away and delete your data. Just ask, and we reply within 15 days.</Resumo>
            <div className="space-y-3 text-neutro-600">
              <p>The LGPD gives you the following rights:</p>
              <Tabela
                cabecalho={['Right', 'What it means']}
                linhas={[
                  ['Confirmation', 'Knowing whether we process your data'],
                  ['Access', 'Getting a copy of your data'],
                  ['Correction', 'Correcting incomplete, inaccurate or outdated data'],
                  ['Anonymisation, blocking or deletion', 'Asking for the removal of unnecessary or excessive data, or data processed in breach of the law'],
                  ['Portability', 'Receiving your data in a structured, machine-readable format'],
                  ['Deletion', 'Erasing data processed on the basis of consent'],
                  ['Information about sharing', 'Knowing who we share data with'],
                  ['Information about consent', 'Knowing that you can refuse consent and what the consequences are'],
                  ['Withdrawal', 'Withdrawing consent at any time'],
                  ['Objection', 'Objecting to processing based on legitimate interest'],
                  ['Review', 'Requesting a review of automated decisions'],
                ]}
              />
              <p><B>How to exercise them:</B></p>
              <ul className="list-disc pl-5 space-y-1">
                <li><B>Deleting your account and all your data:</B> directly in the app’s settings menu, at any time, without needing to contact us.</li>
                <li><B>Unsubscribing from marketing:</B> a link in every email we send.</li>
                <li><B>Refusing app usage measurement:</B> in Profile → Privacy and account → Measure app usage.</li>
                <li><B>A copy of your data:</B> in Profile → Privacy and account → Request a copy of my data, which opens an email already addressed to us.</li>
                <li><B>All other rights, including portability:</B> write to <Email />. We reply within <B>15 days</B>. We may ask you to confirm your identity before acting, to protect your account.</li>
              </ul>
              <p>You can also lodge a complaint with Brazil’s <B>National Data Protection Authority (ANPD)</B> — gov.br/anpd.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>10. Security</Titulo>
            <Resumo>what we actually do to protect your account.</Resumo>
            <div className="text-neutro-600">
              <ul className="list-disc pl-5 space-y-1">
                <li>Encrypted communication in transit (TLS) between the app and our servers;</li>
                <li>Passwords stored with a hashing algorithm, never in readable text;</li>
                <li>Checking against passwords exposed in public breaches at sign-up;</li>
                <li>Email address confirmation;</li>
                <li>Per-user data isolation in the database, so that each account only accesses its own records;</li>
                <li>Two-step authentication available;</li>
                <li>Restricted and logged administrative access.</li>
              </ul>
              <p className="mt-3">No system is completely immune. We recommend a unique, strong password, turning on two-step authentication and caution on shared devices.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>11. Security incidents</Titulo>
            <p className="text-neutro-600">
              If a security incident occurs that may pose a relevant risk or harm to you, we will notify the ANPD and the affected data subjects within a reasonable time, stating the nature of the data involved, the risks, the measures taken and what you can do.
            </p>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>12. Under-18s</Titulo>
            <div className="space-y-3 text-neutro-600">
              <p>Trix is intended exclusively for people aged 18 or over. We do not knowingly collect data from children or adolescents.</p>
              <p>If we become aware of an account belonging to someone under 18, it will be closed and the data deleted. Parents or guardians who identify this situation can contact us at <Email /> for immediate deletion.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>13. Changes to this Policy</Titulo>
            <div className="space-y-3 text-neutro-600">
              <p>We may update this Policy. <B>Material</B> changes — a new purpose, a new legal basis, a relevant new sharing — will be announced by email and in the app <B>30 days in advance</B>.</p>
              <p>The effective date and version number are at the top of the document. We keep the version history available for consultation.</p>
            </div>
          </section>

          <section className="pt-10 border-t border-neutro-300">
            <Titulo>14. Contact us</Titulo>
            <div className="space-y-1 text-neutro-600">
              <p><B>Privacy and data protection:</B> <Email /></p>
              <p><B>Data Protection Officer (DPO):</B> Paulo Pena</p>
              <p><B>General enquiries:</B> <a href="mailto:contato@trix.travel" className="text-terracota-700 hover:underline">contato@trix.travel</a></p>
              <p><B>Address:</B> Rua Visconde do Rio Branco, 1488, Conj. 909, Centro, Curitiba/PR, CEP 80.420-210, Brazil</p>
            </div>
          </section>
        </div>

        <p className="text-xs text-neutro-600 mt-12 pt-6 border-t border-neutro-300">
          Document updated on 21 October 2026. Version 1.2.
        </p>
      </main>

      <Link href="/en" className="mt-8 inline-block text-terracota-700 font-semibold hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  );
}
