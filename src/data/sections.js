// Contenu structuré du programme "Référent Digital" — CJEPE-BENIN
// Chaque section regroupe des cartes; le HTML interne (strong, etc.) est volontairement
// conservé car ce contenu est statique et rédigé par nous, pas par un utilisateur.

export const sections = [
  {
    id: 'generalites',
    emoji: '📘',
    title: 'Généralités sur le Marketing & Communication Digitale',
    cards: [
      {
        title: '📌 Définition du Marketing',
        body: "Ensemble des actions qui visent à : découvrir les besoins des consommateurs, proposer une solution, communiquer pour faire connaître la solution, vendre la solution, fidéliser les clients et en gagner de nouveaux.",
      },
      {
        title: '🌐 Marketing Digital',
        body: "Ensemble de techniques de communication déployées sur les plateformes connectées à l'internet pour attirer des utilisateurs qu'on engage ensuite dans un parcours d'achat.",
      },
      {
        title: '🎯 Enjeux du Marketing Digital',
        items: [
          'Moderniser votre communication',
          'Conquérir de nouveaux espaces',
          'Développer votre business',
          'Fidéliser clients &amp; prospects',
          'Gérer votre e-réputation',
          'Optimiser le référencement',
          'Augmenter le trafic web',
        ],
      },
    ],
  },
  {
    id: 'plateformes',
    emoji: '🖥️',
    title: "Plateformes connectées à l'internet",
    cards: [
      {
        title: '🌍 Site Web',
        body: "Ensemble de pages web et ressources interreliées par des liens hypertextes, accessibles via une URL. <strong>Statique</strong> (HTML, faible coût, rapide) ou <strong>dynamique</strong> (JavaScript/PHP, interactif, évolutif).",
      },
      {
        title: '📱 Applications Web',
        body: "Programme ou logiciel accessible via un navigateur web, à la différence d'un site qui est une collection de pages.",
      },
      {
        title: '🔍 Moteurs de recherche',
        body: 'Applications permettant de trouver des ressources à partir d\'une requête. Exemples : Google (91,88 %), Bing (3,19 %), Yahoo (1,52 %), Baidu (0,76 %).',
      },
      {
        title: '📲 Réseaux sociaux',
        body: "Sites ou applications mobiles permettant d'échanger, partager des contenus, découvrir des photos, vidéos, sons, s'informer. Types : professionnels, partage photos/vidéos, jeux, rencontres. Usuels : Facebook, Twitter, LinkedIn, WhatsApp, YouTube, Instagram, TikTok.",
      },
    ],
  },
  {
    id: 'techniques',
    emoji: '⚡',
    title: 'Techniques de communication en marketing digital',
    cards: [
      {
        title: '📝 Stratégie de contenu',
        items: [
          '<strong>Inbound Marketing</strong> : contenu à forte valeur ajoutée, résultats longs mais durables.',
          '<strong>Outbound Marketing</strong> : publicité payante, résultats rapides mais coûteuse.',
          '<strong>Publicité en ligne</strong> : promouvoir des contenus auprès d\'une cible moyennant paiement.',
          '<strong>Storytelling</strong> : promouvoir une idée à travers un récit pour susciter l\'émotion.',
          '<strong>Copywriting</strong> : rédiger des contenus publicitaires de qualité pour pousser à l\'action.',
        ],
      },
      {
        title: '📱 Stratégie Social Media',
        body: 'Promouvoir votre contenu et interagir avec vos followers sur Facebook, Instagram, LinkedIn, Twitter… Atteindre un public plus large, accroître la notoriété, générer des prospects, améliorer l\'engagement.',
      },
      {
        title: '🔎 Stratégie SEM (moteurs de recherche)',
        body: "Ensemble des techniques pour attirer du trafic sur les moteurs de recherche : <strong>SEO</strong> (référencement naturel) et <strong>SEA</strong> (référencement payant).",
      },
      {
        title: "✉️ Stratégie d'e-mailing",
        body: 'Collecte d\'adresses mails et envoi de messages (bienvenue, promotionnel, newsletter, prise de contact, suggestion de produits) pour réussir son e-mail marketing.',
      },
      {
        title: '🔄 Stratégie de conversion',
        body: 'Parcours client : chemin suivi par un prospect jusqu\'à l\'achat. 3 grandes phases : <strong>Sensibilisation, Considération, Conversion</strong>.',
      },
    ],
  },
  {
    id: 'paid-social',
    emoji: '💰',
    title: 'Paid Social Manager',
    cards: [
      {
        title: '🎯 Rôle',
        body: 'Créer et exécuter des campagnes publicitaires payantes sur les réseaux sociaux (Facebook, Instagram, Twitter, LinkedIn) pour accroître la notoriété, générer du trafic et des conversions.',
      },
      {
        title: '📊 Création de campagnes',
        items: [
          'Définir les objectifs (ex : +20 % de ventes)',
          'Identifier le public cible (démographie, intérêts)',
          'Choisir la plateforme et le budget',
          'Suivre et optimiser (CTR, taux de conversion, ROAS)',
        ],
      },
      {
        title: '📈 Mesure du succès',
        items: [
          '<strong>CTR</strong> : clics / impressions',
          '<strong>Taux de conversion</strong> : actions / clics',
          "<strong>Taux d'engagement</strong> : interactions / impressions",
          '<strong>ROAS</strong> : revenus / dépenses publicitaires',
        ],
      },
      {
        title: '📱 Plateformes',
        items: [
          '<strong>Facebook</strong> : ciblage démographique, intérêts, comportements, audiences similaires.',
          '<strong>Instagram</strong> : visuel, Stories, ciblage par intérêts.',
          '<strong>LinkedIn</strong> : ciblage professionnel (poste, secteur, taille d\'entreprise).',
          '<strong>Twitter</strong> : tweets promus, comptes promus, tendances promues.',
        ],
      },
    ],
  },
  {
    id: 'approfondi',
    emoji: '📊',
    title: 'Marketing Digital approfondi',
    cards: [
      {
        title: '🧩 Les 4P / 4C',
        body: '<strong>4P</strong> : Produit, Prix, Place, Promotion. <strong>4C</strong> : Capital, Clientèle de base, Concurrence, Communication Citoyenne (prospection). En ligne : Plateforme, Publication, Programmation, Publicité.',
      },
      {
        title: '📌 Stratégies marketing sur internet',
        items: [
          'Analyse (segmentation, ciblage)',
          'Planification (organisation des réseaux et du site)',
          "Ébauche (stratégie d'acquisition de visiteurs)",
          'Conversion (tunnel de vente, copywriting, images/vidéos)',
          'Tests (bon visiteur ciblé, conversion, rétention)',
          'Optimisation (indicateurs, bugs, amélioration continue)',
        ],
      },
      {
        title: '📈 Avantages du marketing digital',
        items: [
          'Plus facile à mesurer',
          'Ciblage précis',
          'Plus rentable que le marketing traditionnel',
        ],
      },
    ],
  },
  {
    id: 'community-management',
    emoji: '👥',
    title: 'Community Management',
    cards: [
      {
        title: '📌 Définition',
        body: 'Discipline qui consiste à gérer et développer une communauté en ligne : création de contenu, gestion des réseaux sociaux, modération, engagement des utilisateurs.',
      },
      {
        title: '🎯 Rôle & But',
        body: 'Connecter la marque avec ses clients, fournir des informations utiles, générer du trafic et des conversions, construire la confiance et une relation durable.',
      },
      {
        title: '📋 Plan CM',
        items: [
          'Recueillir des informations sur le sujet',
          'Déterminer le public cible',
          'Créer du contenu adapté',
          'Trouver des images/vidéos',
          'Élaborer une structure claire',
        ],
      },
      {
        title: '🛠 Outils & technologies',
        items: [
          'Logiciels de gestion de communauté',
          'Outils de gestion des réseaux sociaux',
          "Outils d'analyse",
          'Machine Learning & IA',
        ],
      },
      {
        title: '📊 Mesure du succès',
        items: ["Nombre d'abonnés", 'Likes, partages, commentaires', 'Nombre de ventes'],
      },
      {
        title: '🧠 5 compétences marketing',
        items: [
          'Gestion de projet',
          'Leviers de performance digitale',
          "Maîtrise des outils d'analyse",
          'Social Media',
          'Engagement comportemental',
        ],
      },
      {
        title: '📌 10 formes du marketing digital',
        items: [
          'Marketing de contenu',
          'SEM',
          'SMM',
          "Publicité d'affichage",
          'Marketing mobile',
          'Marketing des réseaux sociaux',
          'Email marketing',
          "Marketing d'influenceur",
          "Marketing d'affiliation",
          'Marketing vidéo (audio)',
        ],
      },
      {
        title: '📌 4P du marketing digital mix',
        items: [
          '<strong>Plateforme</strong>',
          '<strong>Publication</strong> (contenu)',
          '<strong>Programmation</strong>',
          '<strong>Promotion</strong> (publicité)',
        ],
      },
    ],
  },
  {
    id: 'social-media-management',
    emoji: '📅',
    title: 'Social Media Management',
    cards: [
      {
        title: '📌 Plan Social Media',
        items: [
          'Objectifs (abonnés, engagement, ventes, notoriété)',
          'Stratégies (campagnes, concours, promotions)',
          'Contenu (équilibre promotionnel/informatif)',
          'Équipe : Social Media Manager, CM, graphiste, analyste, webmaster',
          'Calendrier et budget',
        ],
      },
      {
        title: '📊 Stratégie Social Media Marketing Mix',
        items: [
          'Analyse SWOT',
          'Objectifs SMART (Spécifique, Mesurable, Actionnable, Réaliste, Temporel)',
          'Analyse de la concurrence',
          'Suivi statistique',
          'Optimisation de la stratégie',
          'Ligne éditoriale',
        ],
      },
    ],
  },
  {
    id: 'vlogging',
    emoji: '🎥',
    title: 'Vlogging',
    cards: [
      {
        title: '📌 Introduction',
        body: 'Un vlog (vidéo blog) est une forme de contenu en ligne consistant à créer et partager des vidéos personnelles ou informatives. Plateformes : YouTube, Vimeo, Dailymotion, Instagram, Twitch, Facebook, TikTok.',
      },
      {
        title: '📝 Planification & Préparation',
        items: [
          'Identifier votre public et vos objectifs',
          'Trouver des idées de contenu',
          'Élaborer un calendrier de publication',
          'Réaliser un script ou un plan',
          'Améliorer votre présence à l\'écran (langage corporel, ton de voix)',
        ],
      },
      {
        title: '🎬 Production vidéo',
        items: [
          'Capturer des séquences de qualité',
          'Techniques de prise de vue (angle, mouvements)',
          'Utilisation de la lumière (naturelle et artificielle)',
          'Enregistrement d\'un bon son (micro externe)',
          'Introduction au montage vidéo (Adobe Premiere, Final Cut, DaVinci Resolve)',
        ],
      },
      {
        title: '✂️ Montage & Post-production',
        items: [
          'Importer et organiser les séquences',
          'Couper, assembler, ajuster',
          'Ajouter transitions, titres, effets spéciaux',
          "Améliorer l'audio (volume, musique de fond)",
          'Exporter et compresser pour diffusion en ligne',
        ],
      },
      {
        title: '📈 Promotion & Gestion de chaîne',
        items: [
          'Optimiser titres, descriptions, balises (SEO)',
          'Utiliser des miniatures attrayantes',
          'Interagir avec les spectateurs (commentaires, réseaux sociaux)',
          "Collaborer avec d'autres vloggers/influenceurs",
          'Analyser les statistiques de visionnage',
        ],
      },
      {
        title: '🚀 Évolution & Perfectionnement',
        items: [
          'Expérimenter différents formats et styles',
          'Écouter les commentaires et critiques constructives',
          'Suivre les tendances et les nouvelles techniques',
          'Développer votre marque personnelle',
          'Trouver des opportunités de monétisation (parrainages, publicités, etc.)',
        ],
      },
    ],
  },
  {
    id: 'reseaux-par-domaine',
    emoji: '🌐',
    title: "Réseaux sociaux par domaine d'activité",
    cards: [
      { title: '📚 Éducation', body: 'GitHub, Stack Overflow, Dev.to, HackerRank, LinkedIn, Reddit, Meetup.' },
      { title: '🍳 Culinaire', body: 'Yummly, Cookpad, ChefTalk, Foodie, CuisineAZ, Instagram.' },
      { title: '💼 Professionnel', body: 'LinkedIn.' },
      { title: '🏥 Médical', body: 'Doximity, Sermo, Figure 1, Proximie, Quantiamd.' },
      { title: '🎨 Artistique', body: 'Behance, Dribbble, Instagram, Pinterest.' },
      { title: '🌿 Environnemental', body: 'EcoLink.' },
      { title: '🏃 Sportif', body: 'Strava, MyFitnessPal.' },
      { title: '💻 Technologique', body: 'LinkedIn, Twitter, Reddit, Hacker News, Stack Overflow, Discord, Medium, Dev.to.' },
      { title: '👨‍👩‍👧 Parental', body: 'Peanut.' },
      { title: '🎭 Culturel', body: "Cultur'Connect." },
    ],
  },
  {
    id: 'redaction-web',
    emoji: '✍️',
    title: 'Rédaction Web',
    cards: [
      {
        title: '📌 Introduction',
        body: 'La rédaction web est un art qui consiste à créer des contenus informatifs et intéressants pour un public cible. Elle implique une combinaison de techniques pour produire des contenus à la fois informatifs et attractifs.',
      },
      {
        title: '📝 Écrire pour être lu',
        items: [
          'Choisir des sujets qui intéressent les lecteurs',
          'Construire en « pyramide inversée » (essentiel en premier)',
          'Rédiger de façon simple, directe et concrète',
          'Faciliter la lecture à l\'écran (titres, listes, gras)',
          'Soigner le style (phrases courtes, vocabulaire simple)',
        ],
      },
      {
        title: '🔎 Écrire pour être référencé',
        items: [
          'Comprendre les bases du référencement naturel (SEO)',
          'Choisir les mots-clés (longue traîne)',
          'Optimiser les balises HTML (title, h1, h2, alt)',
          'Créer des liens internes et entrants',
        ],
      },
      {
        title: '📚 Types de contenu',
        body: 'Articles, infographies, vidéos, podcasts, présentations. Chaque type a ses avantages et doit être choisi en fonction du public cible et de l\'objectif.',
      },
      {
        title: '🔑 Recherche de mots-clés',
        items: [
          'Identifier les mots-clés pertinents (Google Trends, Keyword Planner)',
          'Analyser la popularité et la compétitivité (SEMrush, Ahrefs)',
          'Organiser par thème et catégorie',
          'Optimiser avec des outils comme Yoast SEO',
        ],
      },
    ],
  },
  {
    id: 'copywriting',
    emoji: '🖋️',
    title: 'Copywriting',
    cards: [
      {
        title: '📌 Définition',
        body: "Le copywriting (conception-rédaction) est une technique de rédaction persuasive destinée à concevoir des textes publicitaires pour pousser le consommateur à l'action. C'est l'art de vendre avec les mots.",
      },
      {
        title: '🎯 Objectif',
        body: "Pousser une audience à la conversion : ouvrir un email, cliquer sur un lien, s'abonner, contacter l'entreprise, s'inscrire à une newsletter, télécharger un fichier, prendre un rendez-vous, partager sur les réseaux sociaux, etc.",
      },
      {
        title: '📝 10 règles essentielles',
        items: [
          '1. Faire connaissance avec le prospect (persona)',
          '2. Identifier la proposition unique de vente',
          '3. Déterminer l\'objectif du texte de vente',
          '4. Rédiger un titre séduisant (4U : Unique, Ultra-spécifique, Urgent, Utile)',
          '5. Utiliser les mots magiques (avec parcimonie)',
          '6. Appliquer AIDA : Attention, Intérêt, Désir, Action',
          '7. Structurer et aérer le texte (sous-titres, paragraphes courts, listes)',
          '8. Utiliser la preuve sociale (témoignages, avis, chiffres)',
          '9. Retravailler le texte (supprimer, modifier, remplacer)',
          "10. Faire des A/B testing et améliorer",
        ],
      },
    ],
  },
  {
    id: 'publicite-google',
    emoji: '📢',
    title: 'Publicité Google',
    cards: [
      {
        title: '🔍 Search Ads',
        body: "Annonces sur le réseau de recherche. Ciblage par mots-clés. Idéal pour toucher des utilisateurs en phase d'achat.",
      },
      {
        title: '🖼️ Display Ads',
        body: 'Annonces visuelles sur le réseau Display. Ciblage par intérêts, démographie, comportement. Idéal pour la notoriété.',
      },
      {
        title: '🎬 YouTube Ads',
        body: 'Annonces vidéo sur YouTube. Formats TrueView, bumper, non-skippable. Ciblage par intérêts et démographie.',
      },
      {
        title: '🛒 Shopping Ads',
        body: 'Annonces de produits avec images, prix, descriptions. Apparaissent dans les résultats de recherche et sur Google Shopping.',
      },
    ],
  },
  {
    id: 'programme',
    emoji: '📚',
    title: 'Programme Référent Digital',
    cards: [
      {
        title: '📈 Marketing Digital',
        body: "<strong>8 modules</strong> — Maîtrise des stratégies d'acquisition et de fidélisation.",
        items: [
          "<strong>SEO / SEA</strong> : optimisation et campagnes d'achat d'espaces.",
          '<strong>Email marketing &amp; automation</strong> : campagnes personnalisées et scénarios.',
          '<strong>Analytics &amp; tableau de bord</strong> : suivi des KPI et décisions data-driven.',
          '<strong>Stratégie de contenu payant</strong> : plans sponsorisés avec optimisation ROI.',
          '<strong>Social Ads</strong> : campagnes sur Meta, LinkedIn, TikTok.',
          "<strong>Marketing d'influence</strong> : collaboration avec influenceurs.",
          '<strong>Conversion Rate Optimization</strong> : tests A/B et analyse du parcours.',
          '<strong>Stratégie omnicanale</strong> : coordination des canaux digitaux et physiques.',
        ],
      },
      {
        title: '💬 Communication Digitale',
        body: '<strong>6 ateliers</strong> — Concevoir et déployer une communication cohérente.',
        items: [
          '<strong>Plan de communication 360°</strong> : stratégie intégrée tous canaux.',
          '<strong>Rédaction web &amp; storytelling</strong> : techniques SEO et narration.',
          '<strong>Community management avancé</strong> : animation, modération, engagement.',
          "<strong>Gestion de crise et e-réputation</strong> : anticiper et résoudre les crises.",
          '<strong>Stratégie de contenu cross-canal</strong> : production adaptée à chaque plateforme.',
          '<strong>Veille et analyse concurrentielle</strong> : surveillance des tendances et concurrents.',
        ],
      },
      {
        title: '👥 Gestion de Communauté',
        body: '<strong>5 modules</strong> — Animer, fédérer et développer une communauté engagée.',
        items: [
          '<strong>Animation sur les réseaux sociaux</strong> : contenus interactifs (live, stories).',
          '<strong>Modération &amp; relation membres</strong> : règles de modération et gestion des conflits.',
          "<strong>Campagnes d'engagement UGC</strong> : concours, challenges, témoignages.",
          '<strong>KPI communautaires &amp; reporting</strong> : indicateurs et rapports de performance.',
          '<strong>Stratégie de fidélisation</strong> : programmes de reconnaissance et ambassadeurs.',
        ],
      },
    ],
  },
]

export const infos = [
  { label: '📅 Durée', value: '6', suffix: 'mois' },
  { label: '📝 Inscription', value: '15 000', suffix: 'FCFA' },
  { label: '💰 Prix total', value: '150 000', suffix: 'FCFA' },
]

export const contact = {
  city: 'Cotonou',
  phones: ['+229 01 40 32 10 84', '+229 01 53 20 10 03'],
}
