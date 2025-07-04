"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CGU() {
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
            📄 Conditions Générales d'Utilisation
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
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Conditions d'utilisation du site et de nos services de formation
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20">
            <div className="space-y-8 sm:space-y-12">
              
              {/* Préambule */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Préambule
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site <strong>business-succes-online.com</strong> et des services proposés par Business Succès Online.</p>
                  <p>En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.</p>
                </div>
              </section>

              {/* Définitions */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Définitions
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p><strong>Site :</strong> Le site web business-succes-online.com</p>
                  <p><strong>Éditeur :</strong> Business Succès Online, auto-entrepreneur</p>
                  <p><strong>Utilisateur :</strong> Toute personne utilisant le site ou l'un des services proposés</p>
                  <p><strong>Client :</strong> Toute personne ayant souscrit à l'un de nos services de formation ou de coaching</p>
                  <p><strong>Services :</strong> L'ensemble des formations, coachings et accompagnements proposés</p>
                </div>
              </section>

              {/* Objet */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Objet
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Le site a pour objet de proposer des services de formation et d'accompagnement en ligne dans le domaine du business et de l'entrepreneuriat, notamment :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Formation "Business Succès Online"</li>
                    <li>Coaching personnalisé</li>
                    <li>Accompagnement VIP</li>
                    <li>Ressources et contenus éducatifs</li>
                  </ul>
                </div>
              </section>

              {/* Accès au site */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Accès au site
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>L'accès au site est gratuit et ouvert à tous. Cependant, certains contenus et services nécessitent une inscription ou un achat préalable.</p>
                  <p>L'éditeur s'efforce de maintenir le site accessible 24h/24 et 7j/7, mais ne peut garantir une disponibilité permanente du site.</p>
                </div>
              </section>

              {/* Inscription et compte utilisateur */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Inscription et compte utilisateur
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Pour accéder à certains services, vous devez créer un compte utilisateur en fournissant des informations exactes et à jour.</p>
                  <p>Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités effectuées avec votre compte.</p>
                  <p>L'éditeur se réserve le droit de suspendre ou supprimer un compte en cas de non-respect des présentes conditions.</p>
                </div>
              </section>

              {/* Services et produits */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Services et produits
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p><strong>Formation "Business Succès Online" :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Accès à vie au contenu de formation</li>
                    <li>Mises à jour incluses</li>
                    <li>Support par email</li>
                    <li>Garantie 30 jours satisfait ou remboursé</li>
                  </ul>
                  <p><strong>Coaching personnalisé :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Sessions individuelles en visioconférence</li>
                    <li>Plan d'action personnalisé</li>
                    <li>Suivi entre les sessions</li>
                    <li>Garantie résultats ou sessions supplémentaires</li>
                  </ul>
                </div>
              </section>

              {/* Paiements et facturation */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Paiements et facturation
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Les prix sont exprimés en euros et incluent toutes les taxes applicables.</p>
                  <p>Le paiement s'effectue en ligne par carte bancaire ou via les moyens de paiement proposés.</p>
                  <p>Une facture électronique sera automatiquement générée et envoyée par email.</p>
                  <p>Nous proposons des facilités de paiement en 3 fois sans frais sur certains produits.</p>
                </div>
              </section>

              {/* Garanties et remboursements */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Garanties et remboursements
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p><strong>Garantie 30 jours :</strong> Pour la formation, vous disposez de 30 jours pour demander un remboursement complet si vous n'êtes pas satisfait.</p>
                  <p><strong>Garantie résultats :</strong> Pour le coaching, si vous n'obtenez pas les résultats promis, nous vous offrons 2 sessions supplémentaires.</p>
                  <p>Les demandes de remboursement doivent être formulées par email à <a href="mailto:contact@business-succes-online.com" className="text-purple-600 hover:text-purple-700 underline">contact@business-succes-online.com</a>.</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>L'ensemble du contenu du site (textes, images, vidéos, formations) est protégé par le droit d'auteur.</p>
                  <p>L'achat d'une formation vous donne un droit d'usage personnel et non exclusif du contenu.</p>
                  <p>Il est interdit de reproduire, distribuer, vendre ou partager le contenu des formations sans autorisation écrite.</p>
                </div>
              </section>

              {/* Responsabilités */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Responsabilités
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p><strong>Responsabilité de l'éditeur :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fournir les services commandés dans les délais convenus</li>
                    <li>Assurer la disponibilité technique du site</li>
                    <li>Respecter les garanties offertes</li>
                  </ul>
                  <p><strong>Responsabilité de l'utilisateur :</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Utiliser le site conformément aux présentes conditions</li>
                    <li>Ne pas partager ses accès avec des tiers</li>
                    <li>Respecter la propriété intellectuelle</li>
                  </ul>
                </div>
              </section>

              {/* Protection des données */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Protection des données personnelles
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Le traitement de vos données personnelles est régi par notre politique de confidentialité, accessible sur le site.</p>
                  <p>Vous disposez des droits d'accès, de rectification, de suppression et d'opposition sur vos données.</p>
                  <p>Pour exercer ces droits, contactez-nous à <a href="mailto:contact@business-succes-online.com" className="text-purple-600 hover:text-purple-700 underline">contact@business-succes-online.com</a>.</p>
                </div>
              </section>

              {/* Droit applicable et juridiction */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Droit applicable et juridiction
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Les présentes CGU sont soumises au droit français.</p>
                  <p>En cas de litige, les tribunaux français sont seuls compétents.</p>
                  <p>Si une clause des présentes conditions était déclarée nulle, les autres clauses resteraient en vigueur.</p>
                </div>
              </section>

              {/* Modification des conditions */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Modification des conditions
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>L'éditeur se réserve le droit de modifier ces conditions à tout moment.</p>
                  <p>Les nouvelles conditions seront publiées sur le site et entreront en vigueur dès leur publication.</p>
                  <p>Il est recommandé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">
                  Contact
                </h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                  <p>Pour toute question concernant ces conditions générales d'utilisation :</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Email :</strong> <a href="mailto:contact@business-succes-online.com" className="text-purple-600 hover:text-purple-700 underline">contact@business-succes-online.com</a></li>
                    <li><strong>Téléphone :</strong> +33 6 12 34 56 78</li>
                    <li><strong>Formulaire de contact :</strong> <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline">Page contact</Link></li>
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