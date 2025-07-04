"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MentionsLegales() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            📋 Mentions légales
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Mentions légales
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Informations légales et administratives concernant Business Succès Online
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
            <div className="space-y-8 sm:space-y-12">
              
              {/* Éditeur */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Éditeur du site
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p><strong>Raison sociale :</strong> Business Succès Online</p>
                  <p><strong>Forme juridique :</strong> Auto-entrepreneur</p>
                  <p><strong>Adresse :</strong> [Adresse complète à compléter]</p>
                  <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
                  <p><strong>Email :</strong> contact@business-succes-online.com</p>
                  <p><strong>SIRET :</strong> [Numéro SIRET à compléter]</p>
                  <p><strong>Directeur de publication :</strong> [Nom du directeur]</p>
                </div>
              </section>

              {/* Hébergement */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Hébergement
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 underline">vercel.com</a></p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                  <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                </div>
              </section>

              {/* Protection des données */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Protection des données personnelles
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.</p>
                  <p>Pour exercer ces droits, vous pouvez nous contacter à l'adresse email suivante : <a href="mailto:contact@business-succes-online.com" className="text-purple-600 hover:text-purple-700 underline">contact@business-succes-online.com</a></p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Cookies
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.</p>
                  <p>Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.</p>
                </div>
              </section>

              {/* Liens hypertextes */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Liens hypertextes
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Business Succès Online.</p>
                </div>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Responsabilité
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
                  <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse <a href="mailto:contact@business-succes-online.com" className="text-purple-600 hover:text-purple-700 underline">contact@business-succes-online.com</a>.</p>
                </div>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Droit applicable
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Tout litige en relation avec l'utilisation du site <strong>business-succes-online.com</strong> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de [Ville du tribunal compétent].</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Contact
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Pour toute question concernant ces mentions légales, vous pouvez nous contacter :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Par email :</strong> <a href="mailto:contact@business-succes-online.com" className="text-purple-600 hover:text-purple-700 underline">contact@business-succes-online.com</a></li>
                    <li><strong>Par téléphone :</strong> +33 6 12 34 56 78</li>
                    <li><strong>Via notre formulaire de contact :</strong> <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">Page contact</Link></li>
                  </ul>
                </div>
              </section>

            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <Link href="/" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              🏠 Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 