"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'formation'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'formation'
      });
    }, 3000);
  };

  const faqs = [
    {
      question: "Quel est le délai de réponse ?",
      answer: "Nous répondons généralement sous 24h par email et immédiatement par WhatsApp. Pour les appels Calendly, nous confirmons dans les 2h."
    },
    {
      question: "Puis-je avoir un appel gratuit ?",
      answer: "Absolument ! Nous proposons un appel de 30 minutes gratuit pour évaluer tes besoins et voir si nous pouvons t'aider. Réserve directement via Calendly."
    },
    {
      question: "Quels sont vos horaires ?",
      answer: "Nous sommes disponibles du lundi au vendredi de 9h à 18h. Les réponses WhatsApp peuvent être plus tardives selon les disponibilités."
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Oui ! Nous proposons le paiement en 3 fois sans frais sur tous nos programmes. Contacte-nous pour connaître les modalités."
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
            💬 Besoin d'aide ? Contacte-nous !
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Contacte-nous
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Prêt à transformer ton business ? Parlons de tes objectifs et de la meilleure façon de t'accompagner
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                Envoie-nous un message
              </h2>
              
              {submitSuccess ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-2 sm:mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    Nous te répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Ton nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="ton@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service qui t'intéresse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="formation">Formation Business Succès Online</option>
                      <option value="coaching">Coaching Personnalisé</option>
                      <option value="vip">Accompagnement VIP</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Parle-nous de tes objectifs, de ton projet, de tes questions..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      "📤 Envoyer le message"
                    )}
                  </button>
                  
                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    En soumettant ce formulaire, tu acceptes notre politique de confidentialité.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-pointer transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                    <p className="text-gray-300">Réponse instantanée</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">Discutez directement avec moi pour une réponse rapide à vos questions.</p>
                <div className="flex items-center text-blue-400 text-sm font-medium">
                  Ouvrir WhatsApp
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group cursor-pointer transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xl mr-4 group-hover:scale-110 transition-transform">
                    📅
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Rendez-vous</h3>
                    <p className="text-gray-300">Consultation gratuite</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">Planifiez un appel gratuit de 15 minutes pour discuter de votre projet.</p>
                <div className="flex items-center text-green-400 text-sm font-medium">
                  Réserver un créneau
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-sm mr-3">⚡</span>
                  Temps de réponse
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300">WhatsApp: Instantané</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse delay-200"></div>
                    <span className="text-gray-300">Email: Moins de 24h</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse delay-400"></div>
                    <span className="text-gray-300">Rendez-vous: Immédiat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Questions fréquentes
            </h2>
            
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4 last:border-b-0">
                  <h3 className="font-bold text-gray-800 dark:text-white text-sm sm:text-base mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Prêt à passer à l'action ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Rejoins notre communauté d'entrepreneurs qui ont déjà transformé leur business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/tarifs" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                🎯 Voir nos offres
              </Link>
              <a
                href="https://calendly.com/business-succes-online"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-600 text-purple-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                📅 Réserver un appel gratuit
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}