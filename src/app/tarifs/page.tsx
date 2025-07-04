"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Tarifs() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('coaching');
  const [showFAQ, setShowFAQ] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = {
    formation: {
      name: "Formation Business Succès Online",
      price: "497€",
      originalPrice: "697€",
      subtitle: "Formation complète",
      popular: false,
      color: "from-blue-500 to-purple-500",
      features: [
        "Accès complet à la formation vidéo (20+ heures)",
        "Templates, ressources et exercices pratiques",
        "Communauté privée d'entraide",
        "Mises à jour incluses à vie",
        "Bonus : Guide des 50 niches rentables",
        "Bonus : Scripts de vente testés",
        "Garantie 30 jours satisfait ou remboursé"
      ],
      cta: "💎 Je m'inscris maintenant",
      description: "Parfait pour débuter et apprendre à ton rythme"
    },
    coaching: {
      name: "Coaching Personnalisé",
      price: "1490€",
      originalPrice: "1990€",
      subtitle: "Accompagnement complet",
      popular: true,
      color: "from-purple-500 to-pink-500",
      features: [
        "6 sessions individuelles (1h) en visio",
        "Bilan personnalisé & plan d'action sur-mesure",
        "Suivi par email/WhatsApp entre les sessions",
        "Accès à la formation inclus gratuitement",
        "Bonus : Audit gratuit de ton business",
        "Bonus : Stratégie marketing personnalisée",
        "Garantie résultats ou 2 sessions supplémentaires"
      ],
      cta: "⭐ Réserver un appel gratuit",
      description: "L'option premium pour réussir rapidement avec un expert"
    },
    vip: {
      name: "Accompagnement VIP",
      price: "2997€",
      originalPrice: "3497€",
      subtitle: "Service premium",
      popular: false,
      color: "from-pink-500 to-red-500",
      features: [
        "12 sessions individuelles (1h) en visio",
        "Hotline prioritaire 7j/7",
        "Création de ton business plan complet",
        "Révision de tes contenus et stratégies",
        "Accès VIP à tous nos événements",
        "Networking avec notre réseau d'entrepreneurs",
        "Garantie de résultats ou remboursement intégral"
      ],
      cta: "🚀 Candidater maintenant",
      description: "Pour les entrepreneurs ambitieux qui veulent tout maîtriser"
    }
  };

  const faqs = [
    {
      question: "Combien de temps ai-je accès à la formation ?",
      answer: "L'accès est à vie ! Une fois que tu as acheté la formation, tu peux y accéder quand tu veux, autant de fois que tu veux. Les mises à jour sont incluses gratuitement."
    },
    {
      question: "Y a-t-il une garantie ?",
      answer: "Oui ! Nous offrons une garantie 30 jours satisfait ou remboursé sur la formation, et une garantie résultats sur nos coachings. Si tu n'es pas satisfait, nous te remboursons intégralement."
    },
    {
      question: "Puis-je payer en plusieurs fois ?",
      answer: "Absolument ! Nous proposons des facilités de paiement en 3 fois sans frais pour tous nos programmes. Contacte-nous pour connaître les modalités."
    },
    {
      question: "Quel est le profil type des participants ?",
      answer: "Nos participants sont des entrepreneurs débutants ou confirmés, des salariés en reconversion, des freelances qui veulent développer leur activité. Tous niveaux sont acceptés !"
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      answer: "Avec la formation seule, nos élèves voient généralement leurs premiers résultats en 2-3 mois. Avec le coaching, c'est souvent plus rapide : dès le premier mois !"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      result: "+25k€ en 4 mois",
      text: "Grâce au coaching, j'ai structuré mon business et dépassé mes objectifs !",
      plan: "coaching"
    },
    {
      name: "Marc L.",
      result: "Business rentable en 6 semaines",
      text: "La formation m'a donné toutes les clés pour réussir rapidement.",
      plan: "formation"
    },
    {
      name: "Julie K.",
      result: "150k€ de CA en 1 an",
      text: "L'accompagnement VIP a transformé ma vision entrepreneuriale.",
      plan: "vip"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-xs sm:text-sm text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Retour à l'accueil</span>
            <span className="sm:hidden">Retour</span>
          </Link>
          <div className="text-xs sm:text-sm text-gray-600">
            🔥 Offre limitée : -200€ jusqu'au 31 juillet !
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Nos Offres & Tarifs
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Choisis l'option qui correspond le mieux à tes objectifs et ton budget
            </p>
            
            {/* Plan selector */}
            <div className="flex justify-center mb-8 sm:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1 sm:p-2 border border-white/20">
                {Object.entries(plans).map(([key, plan]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key)}
                    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-xs sm:text-sm ${
                      selectedPlan === key 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {plan.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {Object.entries(plans).map(([key, plan]) => (
              <div
                key={key}
                className={`group relative transition-all duration-500 ${
                  selectedPlan === key ? 'scale-105 z-10' : 'hover:scale-105'
                }`}
              >
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-white/20 hover:border-purple-500/30'
                } transition-all duration-300`}>
                  
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-1 sm:py-2 rounded-full">
                        ⭐ PLUS POPULAIRE
                      </div>
                    </div>
                  )}

                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br ${plan.color} rounded-full opacity-10 -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16`}></div>

                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                      {plan.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 sm:mb-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-3xl sm:text-5xl font-black text-transparent bg-gradient-to-r ${plan.color} bg-clip-text`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-400 line-through text-sm sm:text-lg">
                          {plan.originalPrice}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{plan.subtitle}</p>
                      <div className="mt-2 text-xs sm:text-sm text-green-600 font-medium">
                        💰 Économise {parseInt(plan.originalPrice) - parseInt(plan.price)}€
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3">
                          <div className={`w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Testimonial */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center`}>
                          <span className="text-white font-bold text-xs sm:text-sm">
                            {testimonials.find(t => t.plan === key)?.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-xs sm:text-sm">
                            {testimonials.find(t => t.plan === key)?.name}
                          </div>
                          <div className="text-green-600 text-xs font-bold">
                            {testimonials.find(t => t.plan === key)?.result}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 italic">
                        "{testimonials.find(t => t.plan === key)?.text}"
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href="/contact" 
                      className={`block w-full text-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      {plan.cta}
                    </Link>

                    {/* Payment options */}
                    <div className="mt-3 sm:mt-4 text-center">
                      <p className="text-xs sm:text-sm text-gray-500">
                        💳 Paiement en 3x sans frais disponible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Comparaison détaillée
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-700 dark:text-gray-300">Fonctionnalités</th>
                    <th className="text-center py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-700 dark:text-gray-300">Formation</th>
                    <th className="text-center py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-700 dark:text-gray-300">Coaching</th>
                    <th className="text-center py-3 sm:py-4 px-3 sm:px-6 font-medium text-gray-700 dark:text-gray-300">VIP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Accès formation vidéo",
                    "Communauté privée",
                    "Sessions individuelles",
                    "Suivi personnalisé",
                    "Hotline prioritaire",
                    "Business plan complet",
                    "Garantie résultats"
                  ].map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-700 dark:text-gray-300">{feature}</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        {index < 2 ? (
                          <span className="text-green-500 text-lg sm:text-xl">✓</span>
                        ) : (
                          <span className="text-gray-400 text-lg sm:text-xl">✗</span>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        {index < 4 ? (
                          <span className="text-green-500 text-lg sm:text-xl">✓</span>
                        ) : (
                          <span className="text-gray-400 text-lg sm:text-xl">✗</span>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center mb-6 sm:mb-8">
            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:scale-105 transition-transform duration-300"
            >
              Questions fréquentes {showFAQ ? '▲' : '▼'}
            </button>
          </div>

          {showFAQ && (
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 mb-12 sm:mb-16">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full text-left py-3 sm:py-4 flex items-center justify-between font-medium text-gray-800 dark:text-white hover:text-purple-600 transition-colors text-sm sm:text-base"
                    >
                      <span>{faq.question}</span>
                      <span className="text-purple-600 text-lg sm:text-xl">
                        {openFAQ === index ? '−' : '+'}
                      </span>
                    </button>
                    {openFAQ === index && (
                      <div className="pb-3 sm:pb-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Prêt à transformer ton business ?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Rejoins les centaines d'entrepreneurs qui ont déjà franchi le cap
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg hover:bg-gray-100 transition-colors">
                🎯 Choisir mon plan
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg hover:bg-white hover:text-purple-600 transition-colors">
                💬 Parler à un conseiller
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}