// Contenu structuré du programme "Référent Digital" — CJEPE-BENIN
// Chaque section regroupe des cartes, un TP et un Quiz de validation.
// Le HTML interne (strong, etc.) est volontairement conservé car ce contenu
// est statique et rédigé par nous, pas par un utilisateur.

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
    tp: {
      title: "TP · Diagnostic marketing digital d'une entreprise",
      scenario:
        'Choisissez une PME locale (boutique, restaurant, salon…) et réalisez un diagnostic rapide de sa présence digitale.',
      steps: [
        'Lister les canaux digitaux actuellement utilisés par l\'entreprise (site, réseaux sociaux, email…)',
        'Identifier 3 enjeux du marketing digital pertinents pour cette entreprise',
        'Proposer 2 actions concrètes pour moderniser sa communication',
        'Présenter votre diagnostic en 5 lignes maximum',
      ],
    },
    quiz: {
      title: 'Quiz · Généralités Marketing Digital',
      questions: [
        {
          q: "Que fait l'inbound marketing, par opposition à l'outbound marketing ?",
          options: [
            'Il attire par du contenu à forte valeur ajoutée',
            'Il interrompt uniquement par de la publicité payante',
            "Il n'existe pas en marketing digital",
            'Il concerne uniquement la télévision',
          ],
          answer: 0,
        },
        {
          q: "Le marketing digital regroupe les techniques déployées sur…",
          options: [
            'Les journaux papier uniquement',
            "Les plateformes connectées à l'internet",
            'Le bouche-à-oreille uniquement',
            'La radio uniquement',
          ],
          answer: 1,
        },
        {
          q: "Lequel de ces éléments N'EST PAS un enjeu du marketing digital ?",
          options: [
            "Gérer l'e-réputation",
            'Optimiser le référencement',
            'Réduire le nombre d\'employés',
            'Fidéliser clients et prospects',
          ],
          answer: 2,
        },
      ],
    },
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
    tp: {
      title: 'TP · Cartographie des plateformes digitales',
      scenario:
        'Pour un projet de votre choix (association, marque, artiste…), listez et justifiez les plateformes web à utiliser.',
      steps: [
        'Choisir entre un site statique ou dynamique et justifier le choix',
        'Sélectionner 2 réseaux sociaux adaptés à la cible et au secteur',
        'Identifier le moteur de recherche prioritaire à optimiser',
        "Schématiser l'écosystème digital du projet",
      ],
    },
    quiz: {
      title: 'Quiz · Plateformes connectées',
      questions: [
        {
          q: 'Un site dynamique se distingue d\'un site statique car il est…',
          options: [
            'Toujours plus cher à héberger',
            'Interactif et évolutif (JavaScript/PHP)',
            'Constitué de pages non reliées',
            'Impossible à modifier',
          ],
          answer: 1,
        },
        {
          q: 'Quel moteur de recherche détient la plus grande part de marché mondiale ?',
          options: ['Bing', 'Yahoo', 'Google', 'Baidu'],
          answer: 2,
        },
        {
          q: "Une application web se différencie d'un site web car elle est…",
          options: [
            'Un simple document PDF',
            'Un programme/logiciel accessible via un navigateur',
            'Réservée aux jeux vidéo',
            'Impossible à utiliser sur mobile',
          ],
          answer: 1,
        },
      ],
    },
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
    tp: {
      title: 'TP · Construire un mini plan de contenu',
      scenario:
        "Élaborez un plan de contenu d'une semaine pour une marque fictive, combinant inbound et outbound.",
      steps: [
        'Rédiger 1 idée de contenu inbound (article, vidéo tutoriel…)',
        'Proposer 1 action outbound (publicité payante ciblée)',
        'Rédiger un mini storytelling de 3 phrases pour la marque',
        'Définir la phase du parcours client visée par chaque contenu',
      ],
    },
    quiz: {
      title: 'Quiz · Techniques de communication',
      questions: [
        {
          q: 'Le copywriting a pour objectif principal de…',
          options: [
            'Décorer une page web',
            "Pousser le lecteur à l'action",
            'Remplacer le SEO',
            'Éviter toute émotion',
          ],
          answer: 1,
        },
        {
          q: 'SEO et SEA font partie de la stratégie…',
          options: ['Social media', "SEM (moteurs de recherche)", "d'e-mailing", 'de conversion'],
          answer: 1,
        },
        {
          q: 'Les 3 grandes phases du parcours client sont :',
          options: [
            'Achat, Livraison, SAV',
            'Like, Partage, Commentaire',
            'Sensibilisation, Considération, Conversion',
            'Test A, Test B, Test C',
          ],
          answer: 2,
        },
      ],
    },
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
    tp: {
      title: 'TP · Créer une campagne publicitaire fictive',
      scenario: 'Concevez une campagne Paid Social pour promouvoir un nouveau produit sur Facebook/Instagram.',
      steps: [
        'Définir un objectif chiffré (ex : +20 % de trafic en 1 mois)',
        'Décrire le public cible (âge, intérêts, localisation)',
        'Choisir un budget quotidien et la plateforme',
        'Définir 2 indicateurs de succès (CTR, ROAS…) à suivre',
      ],
    },
    quiz: {
      title: 'Quiz · Paid Social Manager',
      questions: [
        {
          q: 'Le CTR se calcule par…',
          options: ['Revenus / dépenses', 'Actions / clics', 'Clics / impressions', 'Interactions / impressions'],
          answer: 2,
        },
        {
          q: 'Le ROAS mesure…',
          options: ['Le taux de rebond', 'Le nombre d\'abonnés', 'Le retour sur dépenses publicitaires', 'La vitesse du site'],
          answer: 2,
        },
        {
          q: 'Quelle plateforme est la plus adaptée à un ciblage professionnel B2B ?',
          options: ['TikTok', 'Snapchat', 'Pinterest', 'LinkedIn'],
          answer: 3,
        },
      ],
    },
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
    tp: {
      title: 'TP · Appliquer les 4P/4C à un projet',
      scenario: 'Reprenez un produit ou service existant et analysez-le selon les modèles 4P et 4C.',
      steps: [
        'Définir le Produit, Prix, Place, Promotion',
        'Définir Capital, Clientèle de base, Concurrence, Communication citoyenne',
        'Identifier une étape du processus à améliorer (analyse, planification, conversion…)',
        'Proposer 1 optimisation basée sur des indicateurs',
      ],
    },
    quiz: {
      title: 'Quiz · Marketing Digital approfondi',
      questions: [
        {
          q: 'Les 4P du marketing sont :',
          options: [
            'Post, Page, Profil, Partage',
            'Produit, Prix, Place, Promotion',
            'Plan, Programme, Profit, Preuve',
            'Personne, Prospect, Preuve, Publicité',
          ],
          answer: 1,
        },
        {
          q: 'Quel est un avantage majeur du marketing digital par rapport au marketing traditionnel ?',
          options: [
            'Il coûte toujours plus cher',
            'Il ne cible personne',
            'Il est plus facile à mesurer',
            'Il est interdit en ligne',
          ],
          answer: 2,
        },
        {
          q: "La phase 'Ébauche' dans la stratégie internet consiste à…",
          options: [
            'Livrer le produit',
            "Définir la stratégie d'acquisition de visiteurs",
            'Facturer le client',
            "Fermer l'entreprise",
          ],
          answer: 1,
        },
      ],
    },
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
        title: '🎯 Rôle &amp; But',
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
        title: '🛠 Outils &amp; technologies',
        items: [
          'Logiciels de gestion de communauté',
          'Outils de gestion des réseaux sociaux',
          "Outils d'analyse",
          'Machine Learning &amp; IA',
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
    tp: {
      title: 'TP · Élaborer un plan de community management',
      scenario: 'Vous devenez CM d\'une marque de cosmétiques bio. Construisez les bases de votre plan d\'action.',
      steps: [
        'Définir le public cible de la communauté',
        'Lister 3 types de contenus adaptés',
        'Choisir 2 outils de gestion des réseaux sociaux',
        'Définir 2 indicateurs de mesure du succès',
      ],
    },
    quiz: {
      title: 'Quiz · Community Management',
      questions: [
        {
          q: 'Le community management consiste à…',
          options: [
            'Uniquement répondre aux emails',
            'Faire de la comptabilité',
            'Gérer et développer une communauté en ligne',
            'Créer des logos',
          ],
          answer: 2,
        },
        {
          q: 'Combien de formes du marketing digital sont citées dans le programme ?',
          options: ['4', '10', '2', '15'],
          answer: 1,
        },
        {
          q: 'Le 4P du marketing digital mix comprend Plateforme, Publication, Programmation et…',
          options: ['Personnel', 'Prix', 'Promotion', 'Preuve'],
          answer: 2,
        },
      ],
    },
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
    tp: {
      title: 'TP · Construire un calendrier éditorial',
      scenario: 'Créez un mini calendrier social media sur 2 semaines pour une marque de votre choix.',
      steps: [
        'Définir 2 objectifs SMART',
        'Planifier 4 publications (dates, formats, thèmes)',
        'Réaliser une mini analyse SWOT du compte',
        'Identifier 1 concurrent à surveiller',
      ],
    },
    quiz: {
      title: 'Quiz · Social Media Management',
      questions: [
        {
          q: 'SMART signifie Spécifique, Mesurable, Actionnable, Réaliste et…',
          options: ['Tendance', 'Temporel', 'Total', 'Transversal'],
          answer: 1,
        },
        {
          q: 'Une analyse SWOT étudie…',
          options: [
            'Ventes, Web, Outils, Trafic',
            'Stratégie, Objectif, Tendance, Social',
            'Forces, Faiblesses, Opportunités, Menaces',
            'Web, Outils, Trafic, Stratégie',
          ],
          answer: 2,
        },
        {
          q: 'Qui fait typiquement partie d\'une équipe social media ?',
          options: [
            'Uniquement le comptable',
            'Social Media Manager, CM, graphiste, analyste',
            'Le livreur',
            'Le notaire',
          ],
          answer: 1,
        },
      ],
    },
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
        title: '📝 Planification &amp; Préparation',
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
        title: '✂️ Montage &amp; Post-production',
        items: [
          'Importer et organiser les séquences',
          'Couper, assembler, ajuster',
          'Ajouter transitions, titres, effets spéciaux',
          "Améliorer l'audio (volume, musique de fond)",
          'Exporter et compresser pour diffusion en ligne',
        ],
      },
      {
        title: '📈 Promotion &amp; Gestion de chaîne',
        items: [
          'Optimiser titres, descriptions, balises (SEO)',
          'Utiliser des miniatures attrayantes',
          'Interagir avec les spectateurs (commentaires, réseaux sociaux)',
          "Collaborer avec d'autres vloggers/influenceurs",
          'Analyser les statistiques de visionnage',
        ],
      },
      {
        title: '🚀 Évolution &amp; Perfectionnement',
        items: [
          'Expérimenter différents formats et styles',
          'Écouter les commentaires et critiques constructives',
          'Suivre les tendances et les nouvelles techniques',
          'Développer votre marque personnelle',
          'Trouver des opportunités de monétisation (parrainages, publicités, etc.)',
        ],
      },
    ],
    tp: {
      title: 'TP · Scénariser une vidéo courte',
      scenario: 'Préparez le script d\'un vlog de 2 minutes présentant un produit ou service.',
      steps: [
        'Définir le public et l\'objectif de la vidéo',
        'Rédiger un script en 3 parties (accroche, contenu, appel à l\'action)',
        'Lister le matériel nécessaire (lumière, son, cadrage)',
        'Proposer un titre et une miniature optimisés SEO',
      ],
    },
    quiz: {
      title: 'Quiz · Vlogging',
      questions: [
        {
          q: "Lequel de ces logiciels N'EST PAS un outil de montage vidéo ?",
          options: ['Adobe Premiere', 'Final Cut', 'Google Sheets', 'DaVinci Resolve'],
          answer: 2,
        },
        {
          q: 'Pourquoi optimiser les titres et balises d\'une vidéo ?',
          options: [
            'Pour ralentir le chargement',
            'Pour cacher la vidéo',
            "Ce n'est jamais utile",
            'Pour améliorer le référencement (SEO)',
          ],
          answer: 3,
        },
        {
          q: "Une des sources de monétisation d'un vlogueur est :",
          options: ['Les impôts', 'Les frais bancaires', 'Les parrainages', 'Le stockage cloud'],
          answer: 2,
        },
      ],
    },
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
    tp: {
      title: 'TP · Choisir les bons réseaux selon le secteur',
      scenario:
        'Pour 3 secteurs différents (ex : médical, culinaire, technologique), proposez les réseaux sociaux adaptés.',
      steps: [
        'Associer chaque secteur à 2 réseaux pertinents',
        'Justifier chaque choix en 1 phrase',
        'Identifier un réseau à éviter pour chaque secteur',
      ],
    },
    quiz: {
      title: 'Quiz · Réseaux sociaux par domaine',
      questions: [
        {
          q: 'Quel réseau est spécifiquement dédié au secteur médical ?',
          options: ['Doximity', 'TikTok', 'Pinterest', 'Peanut'],
          answer: 0,
        },
        {
          q: 'Quel réseau est central pour le secteur professionnel ?',
          options: ['Twitch', 'Cookpad', 'LinkedIn', 'Strava'],
          answer: 2,
        },
        {
          q: 'Behance et Dribbble sont utilisés principalement dans quel domaine ?',
          options: ['Sportif', 'Médical', 'Artistique', 'Parental'],
          answer: 2,
        },
      ],
    },
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
    tp: {
      title: 'TP · Rédiger un article optimisé SEO',
      scenario: 'Rédigez le début d\'un article de blog (titre + intro) optimisé pour le web.',
      steps: [
        'Choisir un mot-clé principal en longue traîne',
        'Rédiger un titre avec la structure 4U',
        'Rédiger une intro en pyramide inversée',
        'Ajouter 2 sous-titres (h2) optimisés',
      ],
    },
    quiz: {
      title: 'Quiz · Rédaction Web',
      questions: [
        {
          q: 'La « pyramide inversée » consiste à…',
          options: [
            "Cacher l'information importante",
            'Mettre l\'essentiel en premier',
            'Écrire sans structure',
            'Conclure uniquement au début',
          ],
          answer: 1,
        },
        {
          q: 'Quel outil sert à analyser la popularité d\'un mot-clé ?',
          options: ['Photoshop', 'Zoom', 'SEMrush / Ahrefs', 'Excel uniquement'],
          answer: 2,
        },
        {
          q: "Pour faciliter la lecture à l'écran, il faut…",
          options: [
            'Écrire un seul bloc de texte',
            'Éviter les titres',
            'Utiliser uniquement des majuscules',
            'Utiliser titres, listes et gras',
          ],
          answer: 3,
        },
      ],
    },
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
    tp: {
      title: 'TP · Rédiger un texte de vente AIDA',
      scenario: 'Rédigez un court texte publicitaire pour un produit fictif en appliquant la méthode AIDA.',
      steps: [
        "Rédiger une phrase d'Attention (accroche)",
        "Développer l'Intérêt en 1-2 phrases",
        'Susciter le Désir avec un bénéfice clé',
        "Terminer par un Appel à l'Action clair",
      ],
    },
    quiz: {
      title: 'Quiz · Copywriting',
      questions: [
        {
          q: 'AIDA signifie :',
          options: [
            'Analyse, Idée, Décision, Achat',
            'Attention, Intérêt, Désir, Action',
            'Audience, Impact, Data, Automation',
            'Aucune des réponses',
          ],
          answer: 1,
        },
        {
          q: 'Les 4U d\'un bon titre sont : Unique, Ultra-spécifique, Urgent et…',
          options: ['Universel', 'Uniforme', 'Utile', 'Ultime'],
          answer: 2,
        },
        {
          q: 'Pourquoi utiliser la preuve sociale dans un texte de vente ?',
          options: [
            'Pour allonger le texte inutilement',
            'Ce n\'est jamais recommandé',
            'Pour remplacer le prix',
            'Pour renforcer la confiance via témoignages/avis',
          ],
          answer: 3,
        },
      ],
    },
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
    tp: {
      title: 'TP · Concevoir une campagne Google Ads',
      scenario: 'Créez le brief d\'une campagne Google Ads pour un e-commerce de chaussures.',
      steps: [
        'Choisir le type de campagne (Search, Display, Shopping, YouTube)',
        'Définir 3 mots-clés cibles',
        'Rédiger une annonce texte (titre + description)',
        'Définir le budget quotidien et l\'objectif',
      ],
    },
    quiz: {
      title: 'Quiz · Publicité Google',
      questions: [
        {
          q: 'Les Shopping Ads affichent…',
          options: [
            'Uniquement du texte',
            'Des vidéos longues uniquement',
            'Images, prix et descriptions de produits',
            'Rien de visuel',
          ],
          answer: 2,
        },
        {
          q: 'Quel format publicitaire est idéal pour toucher des utilisateurs en phase d\'achat ?',
          options: ['Display Ads', 'Bumper Ads', 'Search Ads', 'Aucun'],
          answer: 2,
        },
        {
          q: 'Le ciblage des Display Ads se fait principalement par…',
          options: ['La météo', 'Le numéro de téléphone', 'Uniquement l\'âge', 'Intérêts, démographie, comportement'],
          answer: 3,
        },
      ],
    },
  },

  // ============================================================
  // MODULES COMPLÉMENTAIRES — pour couvrir l'intégralité du
  // programme Référent Digital (SEO/SEA, Analytics, Influence,
  // CRO, Omnicanal, Crise, Veille, Fidélisation, E-commerce,
  // RGPD, Automatisation).
  // ============================================================

  {
    id: 'seo-sea',
    emoji: '🔍',
    title: 'SEO & SEA : Référencement Naturel et Payant',
    cards: [
      {
        title: '📌 Définition du SEO',
        body: "Le référencement naturel (SEO) regroupe les techniques visant à améliorer la visibilité d'un site dans les résultats organiques des moteurs de recherche, sans payer pour l'emplacement.",
      },
      {
        title: '⚙️ Les piliers du SEO',
        items: [
          '<strong>Technique</strong> : vitesse, indexation, responsive design',
          '<strong>Contenu</strong> : mots-clés, qualité, fraîcheur',
          '<strong>Netlinking</strong> : liens entrants de qualité',
          '<strong>Expérience utilisateur</strong> : ergonomie, temps de session',
        ],
      },
      {
        title: '💳 Le SEA (référencement payant)',
        body: 'Achat d\'espaces publicitaires sur les moteurs de recherche (Google Ads, Bing Ads) facturés au clic (CPC) ou à l\'impression (CPM), pour une visibilité immédiate.',
      },
      {
        title: '⚖️ SEO vs SEA',
        items: [
          '<strong>SEO</strong> : gratuit, résultats durables, long terme',
          '<strong>SEA</strong> : payant, résultats immédiats, s\'arrête sans budget',
          'Stratégie idéale : combiner les deux (SEM)',
        ],
      },
    ],
    tp: {
      title: "TP · Audit SEO express d'un site",
      scenario: 'Choisissez un site web (le vôtre ou un exemple) et réalisez un mini audit SEO.',
      steps: [
        'Vérifier la présence d\'une balise title et meta description optimisées',
        'Identifier 3 mots-clés cibles pertinents',
        'Évaluer la vitesse de chargement (PageSpeed Insights)',
        'Proposer 2 axes d\'amélioration SEO',
      ],
    },
    quiz: {
      title: 'Quiz · SEO & SEA',
      questions: [
        {
          q: 'Le SEO désigne :',
          options: ['Le référencement payant', 'Un réseau social', 'Le référencement naturel', 'Un logiciel de montage'],
          answer: 2,
        },
        {
          q: 'Le SEA est facturé principalement au :',
          options: [
            'Clic (CPC) ou à l\'impression (CPM)',
            'Nombre d\'abonnés',
            'Nombre de pages',
            'Forfait annuel fixe uniquement',
          ],
          answer: 0,
        },
        {
          q: 'Le netlinking consiste à :',
          options: [
            'Supprimer tous les liens du site',
            'Acheter des followers',
            'Obtenir des liens entrants de qualité',
            'Créer des mots de passe',
          ],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'email-marketing',
    emoji: '📧',
    title: 'Email Marketing & Marketing Automation',
    cards: [
      {
        title: '📌 Définition',
        body: "L'email marketing consiste à envoyer des messages ciblés à une base de contacts pour informer, fidéliser ou convertir. Le marketing automation permet d'automatiser ces envois selon le comportement de l'utilisateur.",
      },
      {
        title: '✉️ Types de campagnes',
        items: [
          'Email de bienvenue (onboarding)',
          'Newsletter régulière',
          'Email promotionnel / soldes',
          'Email transactionnel (confirmation, facture)',
          'Email de relance panier abandonné',
        ],
      },
      {
        title: "⚙️ Scénarios d'automatisation",
        items: [
          '<strong>Trigger</strong> : événement déclencheur (inscription, achat…)',
          '<strong>Séquence</strong> : suite d\'emails programmés',
          '<strong>Segmentation</strong> : envoi selon le profil du contact',
          '<strong>Personnalisation</strong> : prénom, recommandations produits',
        ],
      },
      {
        title: '📊 Indicateurs clés',
        items: [
          '<strong>Taux d\'ouverture</strong> : emails ouverts / envoyés',
          '<strong>Taux de clic (CTR)</strong> : clics / emails ouverts',
          '<strong>Taux de désabonnement</strong> : à surveiller de près',
          '<strong>Taux de conversion</strong> : actions réalisées / emails envoyés',
        ],
      },
    ],
    tp: {
      title: "TP · Créer un scénario d'automation",
      scenario: "Concevez un scénario d'email automation pour accueillir un nouvel abonné à une newsletter.",
      steps: [
        "Rédiger l'objet et le contenu de l'email de bienvenue",
        'Définir le déclencheur (trigger) du scénario',
        'Planifier 2 emails de suivi (J+3, J+7) avec leurs objectifs',
        'Définir 1 indicateur pour mesurer le succès du scénario',
      ],
    },
    quiz: {
      title: 'Quiz · Email Marketing & Automation',
      questions: [
        {
          q: 'Le marketing automation permet de :',
          options: [
            'Supprimer tous les emails',
            'Automatiser l\'envoi selon le comportement utilisateur',
            'Remplacer le service client',
            'Créer des logos automatiquement',
          ],
          answer: 1,
        },
        {
          q: 'Le taux de clic (CTR) en email marketing se calcule par :',
          options: [
            'Emails envoyés / abonnés',
            'Désabonnements / envois',
            'Clics / emails ouverts',
            'Ventes / clics',
          ],
          answer: 2,
        },
        {
          q: 'Un email de relance panier abandonné vise à :',
          options: ['Supprimer le compte client', 'Récupérer une vente non finalisée', 'Envoyer une facture', 'Annoncer une fermeture'],
          answer: 1,
        },
      ],
    },
  },
  {
    id: 'web-analytics',
    emoji: '📉',
    title: 'Web Analytics & Tableaux de Bord',
    cards: [
      {
        title: '📌 Définition',
        body: "Le web analytics consiste à mesurer, collecter et analyser les données de trafic d'un site ou d'une application pour comprendre le comportement des visiteurs et optimiser les performances.",
      },
      {
        title: '🛠 Outils incontournables',
        items: [
          'Google Analytics 4 (GA4)',
          'Google Search Console',
          'Google Tag Manager',
          'Hotjar / Microsoft Clarity (cartes de chaleur)',
          'Looker Studio (tableaux de bord)',
        ],
      },
      {
        title: '📊 KPI essentiels',
        items: [
          '<strong>Trafic</strong> : sessions, utilisateurs, pages vues',
          '<strong>Engagement</strong> : durée moyenne, taux de rebond',
          '<strong>Acquisition</strong> : sources de trafic (organique, payant, direct, social)',
          '<strong>Conversion</strong> : objectifs atteints, taux de conversion',
          '<strong>Rétention</strong> : utilisateurs récurrents',
        ],
      },
      {
        title: '📋 Construire un tableau de bord',
        items: [
          'Définir les objectifs business à suivre',
          'Sélectionner les KPI pertinents (pas plus de 6-8)',
          'Choisir la fréquence de mise à jour',
          'Visualiser avec des graphiques clairs',
          'Partager avec les parties prenantes',
        ],
      },
    ],
    tp: {
      title: 'TP · Construire un tableau de bord simple',
      scenario: 'Vous devez présenter les performances mensuelles d\'un site e-commerce à la direction.',
      steps: [
        'Sélectionner 5 KPI pertinents parmi trafic, engagement, acquisition, conversion',
        'Définir la source de données pour chacun',
        'Esquisser la structure du tableau de bord (sections, graphiques)',
        'Rédiger une synthèse de 3 phrases interprétant des chiffres fictifs',
      ],
    },
    quiz: {
      title: 'Quiz · Web Analytics',
      questions: [
        {
          q: 'GA4 est un outil de :',
          options: ['Montage vidéo', 'Community management', 'Web analytics', 'Emailing'],
          answer: 2,
        },
        {
          q: 'Le taux de rebond mesure :',
          options: [
            'Le nombre d\'abonnés',
            'La part de visiteurs qui quittent après une seule page',
            'Le prix moyen d\'un produit',
            'Le nombre de likes',
          ],
          answer: 1,
        },
        {
          q: 'Un tableau de bord efficace doit contenir :',
          options: [
            'Toutes les données possibles sans tri',
            'Uniquement des couleurs',
            'Un nombre limité de KPI pertinents',
            'Aucun chiffre',
          ],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'marketing-influence',
    emoji: '🌟',
    title: "Marketing d'Influence",
    cards: [
      {
        title: '📌 Définition',
        body: "Le marketing d'influence consiste à collaborer avec des créateurs de contenu (influenceurs) pour promouvoir une marque, un produit ou un service auprès de leur communauté.",
      },
      {
        title: "👥 Types d'influenceurs",
        items: [
          '<strong>Nano</strong> (1K-10K abonnés) : forte proximité',
          '<strong>Micro</strong> (10K-100K) : bon taux d\'engagement',
          '<strong>Macro</strong> (100K-1M) : large portée',
          '<strong>Méga / Célébrités</strong> (1M+) : notoriété maximale',
        ],
      },
      {
        title: '🤝 Types de collaborations',
        items: [
          'Placement de produit',
          'Code promo / affiliation',
          'Post sponsorisé',
          'Prise de contrôle de compte (takeover)',
          'Ambassadeur de marque long terme',
        ],
      },
      {
        title: '📊 Mesurer une collaboration',
        items: [
          'Portée et impressions générées',
          "Taux d'engagement de la publication",
          'Trafic généré (liens, codes promo)',
          'Retour sur investissement (ROI)',
        ],
      },
    ],
    tp: {
      title: 'TP · Sélectionner un influenceur pour une campagne',
      scenario: 'Une marque de vêtements éco-responsables veut lancer une collaboration avec un influenceur.',
      steps: [
        'Définir le profil d\'influenceur idéal (taille de communauté, thématique)',
        'Proposer un type de collaboration adapté',
        'Rédiger un message de prise de contact',
        'Définir 2 indicateurs pour évaluer le succès de la collaboration',
      ],
    },
    quiz: {
      title: "Quiz · Marketing d'Influence",
      questions: [
        {
          q: 'Un micro-influenceur possède généralement :',
          options: ['Moins de 100 abonnés', 'Entre 10K et 100K abonnés', 'Plus de 10 millions d\'abonnés', 'Aucun abonné'],
          answer: 1,
        },
        {
          q: 'Pourquoi les micro-influenceurs sont-ils souvent recherchés ?',
          options: [
            'Parce qu\'ils sont gratuits',
            'Parce qu\'ils n\'ont pas de communauté',
            'Pour leur bon taux d\'engagement',
            'Parce qu\'ils refusent les partenariats',
          ],
          answer: 2,
        },
        {
          q: "Le ROI d'une collaboration d'influence mesure :",
          options: ['La couleur du logo', 'La durée de la vidéo', 'Le retour sur investissement', 'Le nombre de fautes d\'orthographe'],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'cro',
    emoji: '🧪',
    title: 'CRO : Optimisation du Taux de Conversion',
    cards: [
      {
        title: '📌 Définition',
        body: "Le Conversion Rate Optimization (CRO) regroupe les techniques visant à augmenter le pourcentage de visiteurs qui réalisent une action souhaitée (achat, inscription, contact).",
      },
      {
        title: '🔬 Méthodologie',
        items: [
          'Analyser le parcours utilisateur et les points de friction',
          "Formuler une hypothèse d'amélioration",
          'Créer une variante (A/B testing)',
          'Mesurer les résultats statistiquement',
          'Généraliser si la variante gagne',
        ],
      },
      {
        title: "🎯 Leviers d'optimisation",
        items: [
          'Clarté de la proposition de valeur',
          'Réduction du nombre de champs d\'un formulaire',
          'Boutons d\'appel à l\'action (CTA) visibles',
          'Preuve sociale (avis, témoignages)',
          'Vitesse de chargement des pages',
        ],
      },
      {
        title: '📐 A/B Testing',
        body: 'Méthode consistant à comparer deux versions (A et B) d\'une page ou d\'un élément auprès de deux échantillons d\'utilisateurs pour déterminer laquelle convertit le mieux.',
      },
    ],
    tp: {
      title: 'TP · Concevoir un test A/B',
      scenario: "La page produit d'un site e-commerce a un faible taux de conversion.",
      steps: [
        'Identifier 1 point de friction probable sur la page',
        'Formuler une hypothèse d\'amélioration testable',
        'Décrire la variante B à tester face à la version A',
        'Définir la métrique de succès et la durée du test',
      ],
    },
    quiz: {
      title: 'Quiz · CRO',
      questions: [
        {
          q: 'Le CRO vise à :',
          options: ['Réduire le trafic du site', 'Augmenter le taux de conversion', 'Supprimer les CTA', 'Ralentir le site'],
          answer: 1,
        },
        {
          q: "L'A/B testing consiste à :",
          options: [
            'Envoyer deux emails identiques',
            'Copier un site concurrent',
            'Comparer deux versions pour identifier la plus performante',
            'Fermer le site temporairement',
          ],
          answer: 2,
        },
        {
          q: "Réduire le nombre de champs d'un formulaire vise à :",
          options: [
            'Compliquer l\'inscription',
            'Réduire le trafic',
            'Augmenter le prix',
            'Diminuer la friction et augmenter les conversions',
          ],
          answer: 3,
        },
      ],
    },
  },
  {
    id: 'strategie-omnicanale',
    emoji: '🔗',
    title: 'Stratégie Omnicanale',
    cards: [
      {
        title: '📌 Définition',
        body: 'Une stratégie omnicanale vise à offrir une expérience client fluide et cohérente sur l\'ensemble des canaux (site web, réseaux sociaux, point de vente physique, email, mobile).',
      },
      {
        title: '🆚 Multicanal vs Omnicanal',
        items: [
          '<strong>Multicanal</strong> : plusieurs canaux indépendants, non connectés',
          '<strong>Omnicanal</strong> : canaux interconnectés autour du client',
          "L'objectif omnicanal : une expérience continue quel que soit le point de contact",
        ],
      },
      {
        title: '🧩 Mise en œuvre',
        items: [
          'Centraliser les données client (CRM unique)',
          'Synchroniser les stocks et prix entre canaux',
          'Permettre le « click and collect »',
          'Assurer une identité visuelle et un ton cohérents partout',
        ],
      },
      {
        title: '📈 Bénéfices',
        items: [
          'Meilleure connaissance du parcours client',
          'Augmentation de la fidélité',
          'Hausse du panier moyen',
          'Expérience client différenciante',
        ],
      },
    ],
    tp: {
      title: 'TP · Cartographier un parcours omnicanal',
      scenario: 'Une enseigne de prêt-à-porter possède un site web, une boutique physique et des réseaux sociaux.',
      steps: [
        'Décrire un parcours client type passant par 3 canaux',
        'Identifier les points de friction entre les canaux',
        'Proposer une solution pour fluidifier ce parcours (ex : click and collect)',
        'Lister les données à centraliser dans un CRM unique',
      ],
    },
    quiz: {
      title: 'Quiz · Stratégie Omnicanale',
      questions: [
        {
          q: 'La différence clé entre multicanal et omnicanal est :',
          options: [
            'Le nombre de canaux utilisés',
            "L'interconnexion des canaux autour du client",
            'Le prix des produits',
            "La taille de l'entreprise",
          ],
          answer: 1,
        },
        {
          q: 'Le « click and collect » est un exemple de :',
          options: ['Stratégie SEO', 'Marketing automation', 'Stratégie omnicanale', 'Copywriting'],
          answer: 2,
        },
        {
          q: 'Un CRM unique permet de :',
          options: [
            'Supprimer les données client',
            'Remplacer le site web',
            'Créer des vidéos',
            'Centraliser les données client sur tous les canaux',
          ],
          answer: 3,
        },
      ],
    },
  },
  {
    id: 'plan-communication-360',
    emoji: '🧭',
    title: 'Plan de Communication 360°',
    cards: [
      {
        title: '📌 Définition',
        body: "Un plan de communication 360° est une stratégie intégrée qui coordonne l'ensemble des canaux de communication (digital, print, événementiel, relations presse) autour d'un message cohérent.",
      },
      {
        title: '🏗️ Étapes de construction',
        items: [
          'Diagnostic et objectifs de communication',
          'Définition des cibles et messages clés',
          'Sélection des canaux (digital + traditionnel)',
          'Planification budgétaire et calendrier',
          'Mesure des retombées',
        ],
      },
      {
        title: '📡 Canaux à coordonner',
        items: [
          'Site web et réseaux sociaux',
          'Relations presse et médias',
          'Événementiel et salons',
          'Publicité (digitale et traditionnelle)',
          'Communication interne',
        ],
      },
      {
        title: '✅ Facteurs de succès',
        items: [
          'Cohérence du message sur tous les canaux',
          'Timing coordonné des actions',
          'Identité visuelle unifiée',
          'Suivi et ajustement continu',
        ],
      },
    ],
    tp: {
      title: 'TP · Bâtir un plan 360° simplifié',
      scenario: 'Une association organise un événement caritatif dans 2 mois.',
      steps: [
        'Définir l\'objectif de communication et la cible',
        'Sélectionner 4 canaux complémentaires (digital et traditionnel)',
        'Élaborer un calendrier des actions sur 8 semaines',
        "Définir un indicateur de succès pour l'ensemble du plan",
      ],
    },
    quiz: {
      title: 'Quiz · Plan de Communication 360°',
      questions: [
        {
          q: 'Un plan de communication 360° coordonne :',
          options: [
            'Uniquement les réseaux sociaux',
            'Uniquement la presse',
            "L'ensemble des canaux autour d'un message cohérent",
            'Aucun canal en particulier',
          ],
          answer: 2,
        },
        {
          q: 'Quelle est la première étape d\'un plan de communication ?',
          options: [
            "L'achat de publicité",
            'Le diagnostic et la définition des objectifs',
            'L\'impression des flyers',
            "Le lancement de l'événement",
          ],
          answer: 1,
        },
        {
          q: 'La cohérence du message sur tous les canaux est :',
          options: ['Sans importance', 'Impossible à obtenir', 'Un facteur clé de succès', 'Réservée aux grandes entreprises'],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'gestion-crise',
    emoji: '🚨',
    title: 'Gestion de Crise & E-réputation',
    cards: [
      {
        title: '📌 Définition',
        body: 'La gestion de crise digitale consiste à anticiper, détecter et répondre efficacement aux situations qui menacent la réputation d\'une marque en ligne (bad buzz, avis négatifs, polémiques).',
      },
      {
        title: '🔍 Anticiper',
        items: [
          'Mettre en place une veille active (mentions, avis)',
          'Préparer une cartographie des risques',
          "Rédiger des éléments de langage à l'avance",
          'Définir une chaîne de validation rapide',
        ],
      },
      {
        title: '🛑 Réagir en cas de crise',
        items: [
          'Ne jamais supprimer les commentaires sans raison légitime',
          'Répondre rapidement, avec transparence et empathie',
          'Centraliser la communication (un seul porte-parole)',
          'Documenter la crise pour en tirer des leçons',
        ],
      },
      {
        title: '🌐 E-réputation au quotidien',
        items: [
          'Surveiller les avis (Google, Trustpilot…)',
          'Répondre à tous les avis, positifs comme négatifs',
          'Encourager les clients satisfaits à témoigner',
          'Utiliser des outils de veille (Google Alerts, Mention)',
        ],
      },
    ],
    tp: {
      title: 'TP · Réagir à un bad buzz',
      scenario: 'Un client mécontent publie un avis très négatif et viral sur les réseaux sociaux d\'une marque.',
      steps: [
        'Analyser la situation et évaluer la gravité',
        'Rédiger une réponse publique empathique et transparente',
        'Proposer une action de résolution en message privé',
        'Définir 2 actions préventives pour éviter que cela se reproduise',
      ],
    },
    quiz: {
      title: 'Quiz · Gestion de Crise & E-réputation',
      questions: [
        {
          q: 'Face à un avis négatif, il est recommandé de :',
          options: ['Le supprimer systématiquement', 'L\'ignorer', 'Répondre rapidement avec transparence', 'Répondre agressivement'],
          answer: 2,
        },
        {
          q: 'La veille active permet de :',
          options: [
            'Créer des crises',
            'Détecter les signaux faibles avant qu\'ils ne deviennent une crise',
            'Supprimer les réseaux sociaux',
            'Augmenter les ventes automatiquement',
          ],
          answer: 1,
        },
        {
          q: 'Pendant une crise, il est conseillé de :',
          options: [
            'Laisser chaque employé répondre différemment',
            'Ne communiquer qu\'après 1 mois',
            'Centraliser la communication autour d\'un seul porte-parole',
            'Fermer tous les comptes',
          ],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'veille-concurrentielle',
    emoji: '🕵️',
    title: 'Veille & Analyse Concurrentielle',
    cards: [
      {
        title: '📌 Définition',
        body: 'La veille concurrentielle consiste à surveiller en continu les actions, positionnements et performances des concurrents pour ajuster sa propre stratégie digitale.',
      },
      {
        title: '🔎 Types de veille',
        items: [
          '<strong>Veille sectorielle</strong> : tendances du marché',
          '<strong>Veille concurrentielle</strong> : actions des concurrents directs',
          '<strong>Veille technologique</strong> : nouveaux outils et plateformes',
          '<strong>Veille d\'image</strong> : perception de la marque et des concurrents',
        ],
      },
      {
        title: '🛠 Outils de veille',
        items: [
          'Google Alerts',
          'SEMrush / SimilarWeb (trafic concurrent)',
          'Social listening (Mention, Brandwatch)',
          'Newsletters et flux RSS sectoriels',
        ],
      },
      {
        title: '📊 Analyser un concurrent',
        items: [
          'Positionnement et proposition de valeur',
          'Présence et performance sur les réseaux sociaux',
          'Stratégie de contenu et fréquence de publication',
          'Prix et offres promotionnelles',
        ],
      },
    ],
    tp: {
      title: 'TP · Réaliser une veille concurrentielle',
      scenario: "Choisissez un secteur d'activité et identifiez 2 concurrents directs d'une entreprise fictive.",
      steps: [
        'Analyser leur présence sur les réseaux sociaux (fréquence, ton, engagement)',
        'Identifier leur proposition de valeur',
        "Repérer 1 bonne pratique à s'inspirer",
        'Repérer 1 faiblesse à exploiter',
      ],
    },
    quiz: {
      title: 'Quiz · Veille & Analyse Concurrentielle',
      questions: [
        {
          q: 'La veille concurrentielle sert à :',
          options: [
            'Copier intégralement un concurrent',
            'Ignorer le marché',
            'Ajuster sa stratégie en fonction des actions des concurrents',
            'Supprimer la concurrence',
          ],
          answer: 2,
        },
        {
          q: 'SimilarWeb est utilisé pour :',
          options: ['Monter une vidéo', 'Envoyer des emails', 'Analyser le trafic d\'un site concurrent', 'Créer un logo'],
          answer: 2,
        },
        {
          q: 'Le social listening permet de :',
          options: [
            'Supprimer les commentaires',
            'Surveiller les mentions et l\'image de marque sur les réseaux',
            'Créer des publicités',
            'Gérer la comptabilité',
          ],
          answer: 1,
        },
      ],
    },
  },
  {
    id: 'fidelisation-ugc',
    emoji: '💎',
    title: 'Fidélisation, UGC & Programme Ambassadeurs',
    cards: [
      {
        title: '📌 Définition',
        body: "La fidélisation vise à conserver et engager durablement les clients existants. Le contenu généré par les utilisateurs (UGC - User Generated Content) renforce la confiance et l'authenticité de la marque.",
      },
      {
        title: '🎁 Leviers de fidélisation',
        items: [
          'Programme de points / récompenses',
          'Offres exclusives aux clients fidèles',
          'Communication personnalisée',
          'Expérience client irréprochable',
        ],
      },
      {
        title: '📸 Campagnes UGC',
        items: [
          'Concours photo/vidéo avec hashtag dédié',
          'Republication de contenus clients (avec accord)',
          'Challenges communautaires',
          'Témoignages et avis mis en avant',
        ],
      },
      {
        title: '🤝 Programme ambassadeurs',
        items: [
          'Sélectionner les clients les plus engagés',
          "Offrir des avantages exclusifs (accès anticipé, cadeaux)",
          'Leur donner un rôle actif (avis, recommandations)',
          'Mesurer leur impact (parrainages, mentions)',
        ],
      },
    ],
    tp: {
      title: 'TP · Concevoir une campagne UGC',
      scenario: "Une marque de café veut lancer une campagne de contenu généré par les utilisateurs.",
      steps: [
        'Créer un hashtag dédié à la campagne',
        'Définir la mécanique du concours ou challenge',
        'Lister 2 récompenses attractives pour les participants',
        'Définir comment les meilleurs contenus seront mis en avant',
      ],
    },
    quiz: {
      title: 'Quiz · Fidélisation & UGC',
      questions: [
        {
          q: 'UGC signifie :',
          options: ['Universal Growth Campaign', 'User Generated Content', 'User Growth Chart', 'Unified Global Content'],
          answer: 1,
        },
        {
          q: 'Un programme ambassadeurs vise à :',
          options: [
            'Supprimer les clients fidèles',
            'Réduire la communauté',
            'Mobiliser les clients les plus engagés comme relais de la marque',
            'Augmenter les prix',
          ],
          answer: 2,
        },
        {
          q: 'Le contenu UGC renforce principalement :',
          options: ['Le prix des produits', "La taille de l'entreprise", 'La confiance et l\'authenticité de la marque', "Le nombre d'employés"],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'e-commerce',
    emoji: '🛍️',
    title: 'E-commerce & Tunnel de Vente',
    cards: [
      {
        title: '📌 Définition',
        body: 'L\'e-commerce désigne la vente de produits ou services en ligne. Le tunnel de vente (funnel) représente le parcours qu\'un visiteur suit jusqu\'à l\'achat.',
      },
      {
        title: '🛒 Étapes du tunnel de vente',
        items: [
          '<strong>Découverte</strong> : le visiteur découvre la marque',
          '<strong>Intérêt</strong> : consultation des produits',
          '<strong>Décision</strong> : ajout au panier',
          '<strong>Action</strong> : paiement et achat',
          '<strong>Fidélisation</strong> : réachat et recommandation',
        ],
      },
      {
        title: '🧾 Optimiser le checkout',
        items: [
          'Réduire le nombre d\'étapes de paiement',
          'Proposer plusieurs moyens de paiement',
          'Afficher les frais de livraison tôt dans le parcours',
          'Rassurer avec des badges de sécurité',
        ],
      },
      {
        title: '📦 Indicateurs e-commerce',
        items: [
          '<strong>Taux d\'abandon de panier</strong>',
          '<strong>Panier moyen</strong>',
          '<strong>Taux de conversion</strong>',
          '<strong>Coût d\'acquisition client (CAC)</strong>',
          '<strong>Valeur vie client (LTV)</strong>',
        ],
      },
    ],
    tp: {
      title: 'TP · Optimiser un tunnel de vente',
      scenario: 'Une boutique en ligne constate un fort taux d\'abandon de panier.',
      steps: [
        'Identifier 3 causes possibles d\'abandon de panier',
        'Proposer 1 amélioration du processus de checkout',
        'Concevoir un email de relance panier abandonné',
        'Définir l\'indicateur à suivre pour valider l\'amélioration',
      ],
    },
    quiz: {
      title: 'Quiz · E-commerce & Tunnel de Vente',
      questions: [
        {
          q: 'Le tunnel de vente représente :',
          options: ['Le design du site', 'Le parcours du visiteur jusqu\'à l\'achat', 'Le service après-vente uniquement', 'La liste des produits'],
          answer: 1,
        },
        {
          q: 'Le CAC désigne :',
          options: [
            'Le chiffre d\'affaires cumulé',
            'Le contenu automatisé créatif',
            'Le coût d\'acquisition client',
            'Le taux de clic annuel',
          ],
          answer: 2,
        },
        {
          q: 'Pour réduire l\'abandon de panier, il est conseillé de :',
          options: [
            'Ajouter plus d\'étapes de paiement',
            'Cacher les frais de livraison',
            'Supprimer le panier',
            'Réduire le nombre d\'étapes de paiement',
          ],
          answer: 3,
        },
      ],
    },
  },
  {
    id: 'rgpd-ethique',
    emoji: '⚖️',
    title: 'RGPD, Éthique & Cadre Légal du Digital',
    cards: [
      {
        title: '📌 Le RGPD',
        body: "Le Règlement Général sur la Protection des Données encadre la collecte et le traitement des données personnelles des utilisateurs au sein de l'Union Européenne, applicable dès qu'on cible des résidents européens.",
      },
      {
        title: '🔑 Principes clés',
        items: [
          'Consentement explicite avant collecte',
          'Minimisation des données collectées',
          'Droit d\'accès, de rectification et d\'effacement',
          'Sécurisation des données stockées',
          'Transparence sur l\'usage des données',
        ],
      },
      {
        title: '🍪 Cookies & mentions légales',
        items: [
          'Bandeau de consentement aux cookies',
          'Politique de confidentialité claire',
          'Mentions légales obligatoires sur un site',
          'Conditions générales de vente/utilisation (CGV/CGU)',
        ],
      },
      {
        title: '🤝 Éthique du marketing digital',
        items: [
          'Transparence sur les contenus sponsorisés',
          'Respect de la vie privée des utilisateurs',
          'Lutte contre la désinformation',
          'Publicité responsable envers les publics vulnérables',
        ],
      },
    ],
    tp: {
      title: 'TP · Auditer la conformité RGPD d\'un site',
      scenario: 'Vous devez vérifier la conformité RGPD d\'un site e-commerce fictif.',
      steps: [
        'Vérifier la présence d\'un bandeau de consentement cookies',
        'Vérifier l\'existence d\'une politique de confidentialité',
        'Identifier si le consentement est bien collecté avant tout tracking',
        'Lister 2 points de non-conformité à corriger',
      ],
    },
    quiz: {
      title: 'Quiz · RGPD, Éthique & Cadre Légal',
      questions: [
        {
          q: 'Le RGPD encadre principalement :',
          options: ['Le prix des produits', 'La vitesse d\'un site', 'La collecte et le traitement des données personnelles', 'Le design graphique'],
          answer: 2,
        },
        {
          q: 'Avant de collecter des données personnelles, il faut :',
          options: ['Rien demander', 'Attendre 1 an', 'Payer une taxe', 'Obtenir un consentement explicite'],
          answer: 3,
        },
        {
          q: 'La transparence sur les contenus sponsorisés relève de :',
          options: ['Du SEO technique', 'Du montage vidéo', "De l'éthique du marketing digital", 'De la comptabilité'],
          answer: 2,
        },
      ],
    },
  },
  {
    id: 'outils-automatisation',
    emoji: '⚙️',
    title: 'Outils, CRM & Automatisation No-Code',
    cards: [
      {
        title: '📌 Définition',
        body: 'Les outils no-code permettent d\'automatiser des tâches marketing répétitives sans compétences en programmation, en connectant différentes applications entre elles.',
      },
      {
        title: "🔌 Outils d'automatisation",
        items: [
          'Zapier / Make (Integromat) : connecter des applications',
          'Notion / Airtable : gestion de projet et bases de données',
          'Canva : création graphique rapide',
          'Buffer / Hootsuite : planification des réseaux sociaux',
        ],
      },
      {
        title: '👤 CRM (Customer Relationship Management)',
        items: [
          'Centraliser les informations clients',
          'Suivre le cycle de vente (prospect → client)',
          'Automatiser les relances commerciales',
          'Exemples : HubSpot, Salesforce, Pipedrive',
        ],
      },
      {
        title: '🚀 Cas d\'usage concrets',
        items: [
          'Publier automatiquement sur plusieurs réseaux depuis un seul outil',
          'Envoyer un email automatique après un formulaire rempli',
          'Créer une tâche dans un CRM à chaque nouveau lead',
          'Générer un rapport hebdomadaire automatique',
        ],
      },
    ],
    tp: {
      title: "TP · Concevoir un workflow d'automatisation",
      scenario: 'Vous voulez automatiser la gestion des nouveaux contacts collectés via un formulaire de contact.',
      steps: [
        'Choisir un outil d\'automatisation (ex : Zapier, Make)',
        'Définir le déclencheur (nouveau formulaire rempli)',
        'Définir les actions automatiques (ajout au CRM, email de bienvenue)',
        'Schématiser le workflow en 4 étapes',
      ],
    },
    quiz: {
      title: 'Quiz · Outils, CRM & Automatisation',
      questions: [
        {
          q: 'Zapier et Make permettent de :',
          options: ['Créer des vidéos', 'Héberger un site', 'Connecter et automatiser des applications sans code', 'Faire de la comptabilité'],
          answer: 2,
        },
        {
          q: 'Un CRM sert principalement à :',
          options: ['Monter des vidéos', 'Créer des logos', 'Héberger des emails', 'Centraliser et gérer la relation client'],
          answer: 3,
        },
        {
          q: 'L\'automatisation no-code est utile pour :',
          options: [
            'Remplacer totalement l\'humain',
            'Compliquer les process',
            'Gagner du temps sur des tâches répétitives',
            'Augmenter les coûts sans bénéfice',
          ],
          answer: 2,
        },
      ],
    },
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
      {
        title: '🛍️ Modules complémentaires',
        body: '<strong>6 modules</strong> — Pour couvrir l\'ensemble du parcours commercial et légal.',
        items: [
          '<strong>E-commerce &amp; tunnel de vente</strong> : de la découverte à la fidélisation.',
          '<strong>RGPD, éthique &amp; cadre légal</strong> : conformité et confiance.',
          '<strong>Outils, CRM &amp; automatisation no-code</strong> : gagner en productivité.',
        ],
      },
    ],
  },

  {
    id: 'projet-certification',
    emoji: '🎓',
    title: 'Projet Final & Certification Référent Digital',
    cards: [
      {
        title: '📌 Objectif du projet final',
        body: 'Ce projet de synthèse permet de mobiliser l\'ensemble des compétences acquises durant la formation (marketing digital, communication, gestion de communauté) sur un cas réel ou fictif.',
      },
      {
        title: '🧩 Livrables attendus',
        items: [
          "Diagnostic digital complet d'une entreprise",
          'Stratégie marketing digital (SEO, SEA, social ads, email)',
          "Plan de communication 360° et gestion de l'e-réputation",
          'Plan d\'animation de communauté et calendrier éditorial',
          'Tableau de bord de KPI à suivre',
        ],
      },
      {
        title: '🗓️ Déroulement',
        items: [
          "Choix du cas d'étude (entreprise réelle ou fictive)",
          'Phase de diagnostic et de recherche (1 semaine)',
          'Élaboration de la stratégie complète (2 semaines)',
          'Soutenance orale devant un jury (20-30 min)',
        ],
      },
      {
        title: "🏅 Critères d'évaluation",
        items: [
          'Pertinence du diagnostic et de la stratégie',
          'Cohérence entre les différents canaux proposés',
          'Qualité de la présentation et de l\'argumentation',
          'Maîtrise des outils et concepts vus en formation',
        ],
      },
    ],
    tp: {
      title: 'TP Final · Dossier de certification',
      scenario: 'C\'est le grand projet de fin de formation : concevez une stratégie digitale complète pour une entreprise de votre choix.',
      steps: [
        'Réaliser le diagnostic digital de l\'entreprise (canaux actuels, forces, faiblesses)',
        'Construire une stratégie marketing digital combinant SEO, SEA, social ads et email',
        'Élaborer un plan de communication 360° incluant la gestion de crise',
        'Proposer un plan d\'animation de communauté avec calendrier éditorial',
        'Préparer une soutenance de 20 minutes présentant l\'ensemble de la stratégie',
      ],
    },
    quiz: {
      title: 'Quiz Final · Révision générale Référent Digital',
      questions: [
        {
          q: 'Quelle combinaison forme le SEM (Search Engine Marketing) ?',
          options: ['CRM + ERP', 'SEO + SEA', 'UGC + KPI', 'RGPD + CRO'],
          answer: 1,
        },
        {
          q: 'Quel indicateur mesure le retour sur les dépenses publicitaires ?',
          options: ['CAC', 'LTV', 'ROAS', 'SMART'],
          answer: 2,
        },
        {
          q: 'Que signifie AIDA en copywriting ?',
          options: [
            'Attention, Intérêt, Désir, Action',
            'Analyse, Idée, Décision, Achat',
            'Automatisation, Innovation, Data, Analytics',
            'Aucune des réponses',
          ],
          answer: 0,
        },
        {
          q: 'Une stratégie omnicanale a pour objectif de :',
          options: [
            'Utiliser un seul canal exclusivement',
            'Supprimer les points de vente physiques',
            'Offrir une expérience client cohérente sur tous les canaux',
            'Éviter les réseaux sociaux',
          ],
          answer: 2,
        },
        {
          q: 'Le RGPD impose notamment :',
          options: [
            'La suppression de tous les sites web',
            'Le consentement explicite avant collecte de données',
            'L\'interdiction des emails',
            'La gratuité obligatoire des produits',
          ],
          answer: 1,
        },
      ],
    },
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
