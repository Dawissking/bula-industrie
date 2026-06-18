# Bula Industrie - Site Web Corporate

Site web premium pour Bula Industrie, entreprise industrielle au Mali spécialisée dans l'import-export, l'agro-business, les hydrocarbures, les lubrifiants, la logistique et l'industrie.

## Technologies

- **Framework** : Next.js 16 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **UI Components** : Shadcn/UI + Radix UI
- **Icons** : Lucide React

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero, secteurs, statistiques, partenaires |
| À propos | `/about` | Histoire, mission, valeurs, équipe |
| Activités | `/activities` | 6 secteurs d'activité |
| Développement durable | `/sustainability` | Engagements RSE |
| Projets | `/projects` | Réalisations et projets en cours |
| Actualités | `/news` | Articles et nouvelles |
| Contact | `/contact` | Formulaire et coordonnées |

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

1. Pousser le code sur GitHub/GitLab/Bitbucket
2.Importer le dépôt sur [vercel.com/new](https://vercel.com/new)
3. Vercel détecte automatiquement Next.js
4. Cliquer sur **Deploy**

### Variables d'environnement (optionnel)

Dans le dashboard Vercel > Settings > Environment Variables :

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL du site en production |

## Structure du projet

```
src/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── layout.tsx            # Layout racine
│   ├── globals.css           # Styles globaux + thème
│   ├── sitemap.ts            # Sitemap dynamique
│   ├── robots.ts             # Robots.txt
│   ├── about/page.tsx
│   ├── activities/page.tsx
│   ├── contact/page.tsx
│   ├── news/page.tsx
│   ├── projects/page.tsx
│   └── sustainability/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── CompanyOverview.tsx
│   │   ├── BusinessSectors.tsx
│   │   ├── Statistics.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── SustainabilityPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── Partners.tsx
│   │   └── ContactCTA.tsx
│   ├── shared/
│   │   ├── AnimatedSection.tsx
│   │   └── SectionTitle.tsx
│   └── ui/                   # Composants Shadcn/UI
├── lib/
│   ├── data.ts               # Données de l'entreprise
│   └── utils.ts              # Utilitaires
public/
├── logo-transparent.png      # Logo principal
├── logo.jpeg                 # Logo fallback
└── Logo_bula.jpeg            # Logo source
```

## Couleurs de la marque

| Couleur | Code | Usage |
|---------|------|-------|
| Noir | `#0B0B0B` | Fond principal |
| Or | `#D4A017` | Accents, titres, CTA |
| Vert | `#4CAF50` | Développement durable |
| Argent | `#C0C0C0` | Texte secondaire |
| Blanc | `#FFFFFF` | Texte sur fond sombre |

## Contact

- **Téléphone** : +223 70 91 61 50 / +223 66 29 95 96 / +223 76 10 14 64
- **Email** : bulaindustrie@gmail.com
- **Localisation** : Bamako, Mali

## Licence

© 2026 Bula Industrie. Tous droits réservés.
