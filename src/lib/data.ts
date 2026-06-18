import {
  Truck,
  Fuel,
  Droplets,
  Warehouse,
  Wheat,
  Factory,
  type LucideIcon,
} from "lucide-react";

export const companyInfo = {
  name: "BULA INDUSTRIE",
  tagline: "L'excellence industrielle au service d'un avenir éco-responsable.",
  description:
    "Bula Industrie est un leader multi-sectoriel engagé dans l'excellence opérationnelle et le développement durable. Notre expertise couvre l'import-export, les hydrocarbures, les lubrifiants, la logistique, l'agro-business et l'industrie.",
  founded: "2015",
  headquarters: "Bamako, Mali",
  employees: "500+",
  phone1: "+223 70 91 61 50",
  phone2: "+223 66 29 95 96",
  phone3: "+223 76 10 14 64",
  email: "bulaindustrie@gmail.com",
  address: "Bamako, Mali",
};

export interface Sector {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  image: string;
}

export const sectors: Sector[] = [
  {
    title: "Import-Export",
    description:
      "Facilitation des échanges commerciaux internationaux avec un réseau mondial de partenaires fiables et des solutions sur mesure pour vos opérations d'import-export.",
    icon: Truck,
    color: "#D4A017",
    features: [
      "Commerce international",
      "Douanes & dédouanement",
      "Supply chain global",
      "Conseil en import-export",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "Hydrocarbures",
    description:
      "Distribution et commercialisation de produits pétroliers de haute qualité, garantissant une fourniture fiable et une conformité aux normes internationales les plus strictes.",
    icon: Fuel,
    color: "#E8C547",
    features: [
      "Distribution pétrolière",
      "Stockage & transport",
      "Raffinage",
      "Énergie renouvelable",
    ],
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },
  {
    title: "Lubrifiants",
    description:
      "Production et distribution de lubrifiants industriels et automobiles de première qualité, optimisant les performances mécaniques et la durée de vie des équipements.",
    icon: Droplets,
    color: "#4CAF50",
    features: [
      "Lubrifiants industriels",
      "Huiles moteur",
      "Graisses techniques",
      "Fluides hydrauliques",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    title: "Logistique",
    description:
      "Solutions logistiques intégrées couvrant le transport, l'entreposage et la gestion de la chaîne d'approvisionnement avec une efficacité opérationnelle maximale.",
    icon: Warehouse,
    color: "#C0C0C0",
    features: [
      "Transport & fret",
      "Entreposage",
      "Gestion de flotte",
      "Distribution nationale",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    title: "Agro-Business",
    description:
      "Développement de solutions agricoles innovantes pour une production durable, alliant modernisation et respect de l'environnement pour les communautés locales.",
    icon: Wheat,
    color: "#4CAF50",
    features: [
      "Production agricole",
      "Transformation alimentaire",
      "Commerce céréalier",
      "Agriculture durable",
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    title: "Industrie",
    description:
      "Capacités industrielles avancées pour la transformation, la fabrication et la production à grande échelle, répondant aux standards de qualité internationaux.",
    icon: Factory,
    color: "#D4A017",
    features: [
      "Transformation",
      "Fabrication",
      "Production industrielle",
      "Contrôle qualité",
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
];

export const stats = [
  { value: "500+", label: "Employés qualifiés" },
  { value: "10+", label: "Années d'expérience" },
  { value: "6", label: "Secteurs d'activité" },
  { value: "1000+", label: "Clients satisfaits" },
  { value: "50+", label: "Partenaires internationaux" },
  { value: "98%", label: "Taux de satisfaction" },
];

export const partners = [
  "TotalEnergies",
  "Shell",
  "Chevron",
  "ExxonMobil",
  "Lubrifiants Total",
  "Sociedad",
  "Bolloré Logistics",
  "DHL",
  "Maersk",
  "Cargill",
  "Olam International",
  "Société Générale",
];

export const news = [
  {
    id: 1,
    title: "Bula Industrie lance son nouveau terminal logistique à Bamako",
    excerpt:
      "Un investissement majeur dans les infrastructures logistiques pour renforcer notre capacité de distribution en Afrique de l'Ouest.",
    date: "2026-06-10",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    id: 2,
    title: "Partenariat stratégique avec TotalEnergies pour l'approvisionnement en hydrocarbures",
    excerpt:
      "Un accord de longue durée garantissant l'approvisionnement stable en produits pétroliers pour nos clients.",
    date: "2026-05-22",
    category: "Partenariat",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },
  {
    id: 3,
    title: "Lancement de la gamme éco-responsable de lubrifiants Bula Green",
    excerpt:
      "Une innovation dans nos produits de lubrification, 100% biodégradables et conformes aux normes environnementales internationales.",
    date: "2026-04-15",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: 4,
    title: "Bula Industrie obtient la certification ISO 9001:2015",
    excerpt:
      "Une reconnaissance internationale de notre engagement envers la qualité et l'excellence opérationnelle dans tous nos secteurs.",
    date: "2026-03-08",
    category: "Certification",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: 5,
    title: "Programme de formation professionnelle pour 200 jeunes Maliens",
    excerpt:
      "Notre initiative RSE vise à former la prochaine génération de professionnels industriels au Mali et en Afrique de l'Ouest.",
    date: "2026-02-20",
    category: "RSE",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: 6,
    title: "Expansion des activités agro-business dans la région de Sikasso",
    excerpt:
      "Un projet agricole d'envergure pour soutenir les communautés locales et promouvoir une agriculture durable et moderne.",
    date: "2026-01-12",
    category: "Agro-Business",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
];

export const projects = [
  {
    id: 1,
    title: "Terminal Pétrolier de Bamako",
    description:
      "Construction d'un terminal pétrolier moderne d'une capacité de 50 000 m³ pour garantir l'approvisionnement en carburants de la capitale et des régions environnantes.",
    sector: "Hydrocarbures",
    status: "En cours",
    progress: 75,
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  },
  {
    id: 2,
    title: "Centre Logistique Intégré",
    description:
      "Développement d'un hub logistique de 15 000 m² équipé de technologies de gestion automatisée pour optimiser la chaîne d'approvisionnement.",
    sector: "Logistique",
    status: "En cours",
    progress: 60,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    id: 3,
    title: "Ferme Agro-Industrielle de Sikasso",
    description:
      "Création d'une exploitation agro-industrielle moderne combinant production, transformation et commercialisation de produits agricoles.",
    sector: "Agro-Business",
    status: "Planifié",
    progress: 25,
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    id: 4,
    title: "Usine de Lubrifiants Bula Green",
    description:
      "Mise en place d'une unité de production de lubrifiants éco-responsables respectant les normes environnementales les plus strictes.",
    sector: "Lubrifiants",
    status: "En cours",
    progress: 45,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

export const values = [
  {
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque aspect de nos opérations, de la qualité de nos produits à la satisfaction de nos clients.",
    icon: "🏆",
  },
  {
    title: "Innovation",
    description:
      "L'innovation est au cœur de notre stratégie, nous investissons continuellement dans les technologies de pointe et les procédés modernes.",
    icon: "💡",
  },
  {
    title: "Durabilité",
    description:
      "Notre engagement envers l'environnement se traduit par des pratiques éco-responsables dans tous nos secteurs d'activité.",
    icon: "🌱",
  },
  {
    title: "Intégrité",
    description:
      "La transparence et l'éthique guident nos relations avec les partenaires, les clients et les communautés que nous servons.",
    icon: "🤝",
  },
  {
    title: "Performance",
    description:
      "Nous nous engageons à délivrer des résultats mesurables et tangibles pour chaque projet entrepris par nos équipes.",
    icon: "📊",
  },
  {
    title: "Responsabilité",
    description:
      "En tant qu'acteur industriel majeur, nous assumons nos responsabilités sociales et environnementales avec conviction.",
    icon: "🌍",
  },
];

export const whyChooseUs = [
  {
    title: "Expertise Multi-Sectorielle",
    description:
      "Une connaissance approfondie de six secteurs stratégiques nous permet d'offrir des solutions complètes et intégrées.",
  },
  {
    title: "Réseau International",
    description:
      "Des partenariats solides avec les leaders mondiaux de l'industrie garantissent l'accès aux meilleures technologies et produits.",
  },
  {
    title: "Engagement Qualité",
    description:
      "Certifiés ISO 9001:2015, nous appliquons les standards les plus exigeants dans tous nos processus opérationnels.",
  },
  {
    title: "Approche Durable",
    description:
      "Chaque décision intègre des critères environnementaux pour un développement industriel responsable et pérenne.",
  },
  {
    title: "Équipe Qualifiée",
    description:
      "Plus de 500 professionnels passionnés et hautement qualifiés au service de l'excellence opérationnelle.",
  },
  {
    title: "Proximité Client",
    description:
      "Un service client réactif et personnalisé, avec un accompagnement dédié à chaque étape de votre projet.",
  },
];

export const sustainabilityPillars = [
  {
    title: "Transition Énergétique",
    description:
      "Investissement massif dans les énergies renouvelables et les technologies propres pour réduire notre empreinte carbone.",
    metric: "-30%",
    metricLabel: "Émissions CO2 d'ici 2030",
  },
  {
    title: "Économie Circulaire",
    description:
      "Mise en place de processus de recyclage et de valorisation des déchets dans toutes nos opérations industrielles.",
    metric: "85%",
    metricLabel: "Taux de recyclage",
  },
  {
    title: "Développement Local",
    description:
      "Contribution active au développement économique et social des communautés locales à travers nos programmes RSE.",
    metric: "200+",
    metricLabel: "Jeunes formés par an",
  },
  {
    title: "Innovation Verte",
    description:
      "Recherche et développement de solutions technologiques éco-responsables pour l'industrie du futur.",
    metric: "15M",
    metricLabel: "FCFA investis en R&D verte",
  },
];
