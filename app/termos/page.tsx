import React from 'react';
import Link from 'next/link';

export default function Termos() {
  return (
    <div className="min-h-screen bg-primary-bg font-sans">
      
      {/* App Bar (Estilo FlutterFlow) */}
      <header className="w-full h-14 bg-primary text-info flex items-center px-4 shadow-md sticky top-0 z-10">
        <Link href="/" className="p-2 hover:bg-white/20 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
        <h1 className="flex-1 text-center text-lg font-semibold tracking-wide">Terms of Use</h1>
        <div className="w-10"></div> {/* Espaçador para manter o título perfeitamente centralizado */}
      </header>

      {/* Conteúdo */}
      <main className="max-w-4xl mx-auto px-6 py-8 text-primary-text">
        <h2 className="text-3xl font-bold mb-1">Terms of Use</h2>
        <p className="text-sm text-secondary-text mb-8">Last update: July 2026</p>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            Welcome to Trix Travel ("we", "our", or "Trix"). By accessing our app, website (trix.travel), and related services, you agree to these Terms of Use. Please read them carefully.
          </p>

          <section>
            <h3 className="font-semibold mb-1">1. The Trix Travel Service</h3>
            <p className="text-secondary-text">
              Trix Travel operates as an AI-native travel concierge. Our purpose is to eliminate analytical fatigue from travel planning by generating hyper-personalized itineraries based on your budget, pace, and specific preferences.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">2. Account Registration and Security</h3>
            <p className="text-secondary-text">
              To save itineraries and access advanced features, you must create an account. You are responsible for safeguarding your login credentials. Our authentication is secured (managed via Supabase). You may delete your account and associated data at any time via the "Settings" menu within the app, following Apple and Google store guidelines.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">3. Booking Disclaimer and Affiliate Links</h3>
            <p className="text-secondary-text">
              Trix Travel is not a traditional travel agency. We provide AI-generated itinerary logic and suggestions. Links to hotels, flights, and attractions may be affiliate links (B2B2C model), which generate a commission for Trix at no extra cost to you.
              <br />
              We do not guarantee real-time availability or static pricing from third-party suppliers. We are not liable for overbooking, cancellations, accidents, or commercial disputes between you and the final service providers.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">4. Acceptable Use</h3>
            <p className="text-secondary-text">You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-secondary-text">
              <li>Reverse engineer our itinerary generation engine or abuse our APIs integrations (like Gemini and Cloud Run).</li>
              <li>Generate itineraries in bulk using bots or automated scripts.</li>
              <li>Use the platform for any illegal, fraudulent, or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-1">5. Limitation of Liability</h3>
            <p className="text-secondary-text">
              Trix Travel utilizes cutting-edge technologies to cross-reference data. However, operating hours, local rules, and estimated costs may change in real life. Users bear total responsibility for verifying critical information (like visas, safety, and documentation) before traveling.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-1">6. Governing Law</h3>
            <p className="text-secondary-text">
              These Terms are governed by the laws of the Federative Republic of Brazil. Any disputes shall be resolved in the jurisdiction of Curitiba, Parana, the headquarters of our operation.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}