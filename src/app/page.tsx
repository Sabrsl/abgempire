"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      text: "Grâce à cette formation, j'ai lancé mon e-commerce qui génère maintenant 15k€/mois !",
      author: "Marie L.",
      role: "Entrepreneur E-commerce"
    },
    {
      text: "Le coaching personnalisé m'a permis de structurer mon business et d'atteindre mes objectifs en 6 mois.",
      author: "Thomas K.",
      role: "Coach Digital"
    },
    {
      text: "Une approche concrète et efficace. J'ai enfin pu quitter mon emploi pour me consacrer à mon projet !",
      author: "Sophie M.",
      role: "Consultante Freelance"
    }
  ];

  const stats = [
    { number: "500+", label: "Entrepreneurs formés" },
    { number: "98%", label: "Taux de satisfaction" },
    { number: "2.5M€", label: "CA généré par nos élèves" },
    { number: "6 mois", label: "Temps moyen pour rentabiliser" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 overflow-hidden">
      {/* Cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-50 blur-sm transition-all duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(0, 0)'
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs sm:text-sm font-medium rounded-full mb-6 sm:mb-8 animate-bounce">
              🔥 +500 entrepreneurs nous font confiance
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight px-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Succès Online
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Transforme ton idée en <span className="font-bold text-purple-600">business rentable</span> grâce à notre méthode éprouvée et notre accompagnement d'experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <Link href="/tarifs" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-base sm:text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform w-full sm:w-auto">
              <span className="relative z-10">🚀 Je démarre maintenant</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button className="flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-xl text-base sm:text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 w-full sm:w-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Voir la démo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Nos Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deux approches complémentaires pour maximiser tes chances de succès
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="group relative p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
                  Formation Business Succès Online
                </h3>
                
                <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Stratégies concrètes pour lancer et scaler ton business digital</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Modules vidéo, exercices pratiques, templates exclusifs</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Accès à une communauté d'entrepreneurs motivés</span>
                  </li>
                </ul>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-medium">
                    💡 Idéal pour les autodidactes qui veulent avancer à leur rythme
                  </p>
                </div>
                
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">À partir de 297€</span>
                  <p className="text-xs sm:text-sm text-gray-500">Accès à vie + mises à jour</p>
                </div>
              </div>
            </div>
            
            <div className="group relative p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
                  Coaching Personnalisé
                </h3>
                
                <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Accompagnement individuel et sur-mesure</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Sessions en visio, plan d'action personnalisé</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Suivi régulier, feedbacks, motivation et résultats concrets</span>
                  </li>
                </ul>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-medium">
                    🚀 Pour ceux qui veulent aller plus loin, plus vite, avec un expert
                  </p>
                </div>
                
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-black text-purple-600">À partir de 997€</span>
                  <p className="text-xs sm:text-sm text-gray-500">3 mois d'accompagnement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Ils ont réussi
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Des résultats concrets de nos entrepreneurs
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl text-purple-500 mb-3 sm:mb-4">"</div>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                  {testimonials[activeTestimonial].text}
                </p>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-lg">
                      {testimonials[activeTestimonial].author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-purple-500 w-6 sm:w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Prêt à transformer ton idée en succès ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12">
            Rejoins notre communauté d'entrepreneurs qui ont déjà franchi le cap
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link href="/tarifs" className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-lg sm:text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform w-full sm:w-auto">
              <span className="relative z-10">🎯 Choisir ma formation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link href="/contact" className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-purple-600 text-purple-600 font-bold rounded-xl text-lg sm:text-xl hover:bg-purple-600 hover:text-white transition-all duration-300 w-full sm:w-auto">
              💬 Parler à un expert
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Business Succès Online. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-3 sm:mt-4">
            <Link href="/mentions-legales" className="text-xs sm:text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgu" className="text-xs sm:text-sm text-gray-500 hover:text-purple-600 transition-colors">
              CGU
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm text-gray-500 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}