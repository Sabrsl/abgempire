# 🚀 Business Succès Online

Un site web moderne et responsive pour une formation en ligne et coaching entrepreneurial, développé avec Next.js 14, TypeScript et Tailwind CSS.

![Business Succès Online](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Fonctionnalités

### 🎨 Design & UX
- **Design moderne** avec glassmorphism et gradients animés
- **Responsive mobile-first** optimisé pour tous les écrans
- **Animations fluides** et micro-interactions
- **Dark mode** supporté
- **Performance optimisée** avec Next.js 14

### 📱 Pages
- **Accueil** : Présentation des services avec témoignages
- **Tarifs** : Plans de formation et coaching avec comparaison
- **Contact** : Formulaire et moyens de contact
- **Mentions légales** : Informations légales complètes
- **CGU** : Conditions générales d'utilisation

### 🛠️ Technologies

- **Framework** : Next.js 14 avec App Router
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : CSS animations et transitions
- **Déploiement** : Vercel (recommandé)

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/votre-username/business-succes-online.git
cd business-succes-online

# Installer les dépendances
npm install
# ou
yarn install

# Lancer le serveur de développement
npm run dev
# ou
yarn dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
abgempire/
├── src/
│   ├── app/
│   │   ├── globals.css          # Styles globaux
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── contact/
│   │   │   └── page.tsx         # Page contact
│   │   ├── tarifs/
│   │   │   └── page.tsx         # Page tarifs
│   │   ├── mentions-legales/
│   │   │   └── page.tsx         # Mentions légales
│   │   └── cgu/
│   │       └── page.tsx         # Conditions d'utilisation
│   └── components/               # Composants réutilisables
├── public/                       # Assets statiques
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `globals.css` :
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Contenu
- **Textes** : Modifier directement dans les fichiers `.tsx`
- **Images** : Remplacer dans le dossier `public/`
- **Liens** : Mettre à jour les URLs dans les composants

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes
- **Netlify** : Compatible avec Next.js
- **Railway** : Déploiement simple
- **VPS** : Build manuel avec `npm run build`

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé
- **SEO** : Meta tags et structure sémantique
- **Accessibilité** : WCAG 2.1 AA

## 🔧 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Lancer en production
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📱 Responsive Design

Le site est optimisé pour :
- 📱 **Mobile** : 320px - 768px
- 📱 **Tablet** : 768px - 1024px
- 💻 **Desktop** : 1024px+

## 🎯 Fonctionnalités clés

### Page d'accueil
- Hero section avec animations
- Statistiques et témoignages
- Présentation des services
- Call-to-action optimisés

### Page tarifs
- Plans de formation détaillés
- Tableau de comparaison
- FAQ interactive
- Garanties et remboursements

### Page contact
- Formulaire de contact
- Méthodes de contact alternatives
- Validation des données
- Intégration WhatsApp/Calendly

## 🔒 Sécurité

- **HTTPS** : Obligatoire en production
- **Validation** : Formulaires sécurisés
- **RGPD** : Conformité européenne
- **Cookies** : Politique transparente

## 📈 SEO

- **Meta tags** : Optimisés pour chaque page
- **Structure** : Balises sémantiques
- **Performance** : Core Web Vitals
- **Accessibilité** : WCAG 2.1

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- 📧 Email : contact@business-succes-online.com
- 📱 WhatsApp : +33 6 12 34 56 78
- 🌐 Site : [business-succes-online.com](https://business-succes-online.com)

## 🙏 Remerciements

- **Next.js** pour le framework
- **Tailwind CSS** pour le styling
- **Vercel** pour l'hébergement
- **TypeScript** pour la sécurité du code

---

⭐ **Star ce projet si il vous a aidé !**

🔗 **Liens utiles :**
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)