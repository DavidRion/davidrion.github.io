import { Component } from '@angular/core';

interface ProjectBullet {
  label: string;
  text?: string;
  items?: string[];
}

interface Project {
  name: string;
  period?: string;
  subtitle: string;
  bullets: ProjectBullet[];
  tags: string[];
}

interface Experience {
  period: string;
  company: string;
  companyUrl: string;
  location: string;
  role: string;
  expertise: string[];
  projects: Project[];
  current?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = [
    {
      period: 'Avr. 2019 — Présent',
      company: 'Desjardins - Solutions, Conformité, Sécurité et Valorisation de l\'information',
      companyUrl: 'https://www.desjardins.com',
      location: 'Montréal (Qc), Canada',
      role: 'Team / Tech Lead — Analyste-Programmeur',
      expertise: [
        'Direction Technique : Construction et pilotage d\'escouades agiles performantes — conseil, coaching et conduite d\'entrevues pour bâtir des équipes d\'excellence.',
        'Rôle Stratégique : Pilotage de l\'architecture et pivot collaboratif entre l\'escouade technique, le Product Owner et les utilisateurs finaux.',
        'Culture Engineering : Évangélisation des pratiques Clean Code et Software Craftsmanship via le mentorat et les revues de code.',
        'Architecture Microservices : Design de systèmes robustes et scalables, alignés sur les besoins d\'affaires stratégiques.',
      ],
      projects: [
        {
          name: 'SPT (Sécurité pour Tous)',
          period: '2021 — Présent',
          subtitle: 'Plateforme névralgique de formation et sensibilisation en sécurité (60 000+ employés)',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Écosystème interactif de cybersécurité centralisant les formations et bilans personnels de 60 000+ collaborateurs. La plateforme agrège des données hétérogènes (Active Directory, incidents tiers) pour fournir aux gestionnaires des indicateurs de performance critiques : scores de risque, assiduité et métriques de conformité.',
            },
            {
              label: 'Performance & Scalabilité',
              text: 'Optimisation continue et suivi rigoureux des performances des traitements pour supporter une charge utilisateur massive.',
            },
            {
              label: 'Évolution du Produit',
              text: 'Développement de nouvelles fonctionnalités complexes et gestion proactive des migrations de versions (Stack technique et infrastructure).',
            },
            {
              label: 'Architecture & Livraison',
              text: 'Design de microservices et batchs critiques avec un cycle de mise en production toutes les 3 semaines',
            },
          ],
          tags: ['Java', 'Spring Boot', 'Spring Batch', 'Angular', 'Microservices', 'Selenium', 'LDAP', 'Agile']
        },
        {
          name: 'MDP (Gestion de Mots de Passe Robustes)',
          period: '2025 — Présent',
          subtitle: 'Solution d\'entreprise pour la sécurisation proactive des accès critiques (60 000+ collaborateurs)',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Système automatisé de détection et remédiation des comptes à risque. La plateforme identifie les credentials faibles ou compromis et orchestre le cycle de vie du changement de mot de passe.',
            },
            {
              label: 'Workflow Critique & Automatisation',
              items: [
                'Gestion de campagnes de sensibilisation et d\'envoi de courriels automatisés.',
                'Mise en place d\'une logique de cédule (Scheduling) avec paliers d\'avertissement.',
                'Action de dernier recours : Développement de la mécanique de force reset automatique dans l\'Active Directory (AD) en cas de non-conformité avant l\'échéance.',
              ],
            },
            {
              label: 'Expertise',
              text: 'Intégration profonde avec l\'Active Directory, gestion des files d\'attente de courriels, et développement de règles d\'affaires rigoureuses pour éviter toute interruption de service non planifiée.',
            },
          ],
          tags: ['Kotlin', 'Spring Boot', 'Angular', 'LDAP'],
        },
        {
          name: 'GRP (Gestion Recouvrement de prêts)',
          period: '2018 — 2021',
          subtitle: 'Système central de gestion du recouvrement de prêts pour les équipes spécialisées de Desjardins',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Système central de gestion du recouvrement de prêts pour les équipes spécialisées de Desjardins.',
            },
            {
              label: 'Impact & Complexité',
              text: 'Refonte complète des flux de travail de recouvrement, réduction significative des délais de traitement et amélioration du suivi client.',
            },
            {
              label: 'Expertise',
              text: 'Modernisation technologique full-stack, migration vers une architecture microservices et mise en place d\'une intégration continue robuste.',
            },
          ],
          tags: ['Java', 'Kotlin', 'Spring Boot', 'Spring Batch', 'Angular', 'Microservices', 'Cloud Foundry', 'Concourse'],
        },
      ],
      current: true,
    },
    {
      period: 'Jan. 2017 — Avr. 2019',
      company: 'Desjardins - Lutte au Blanchiment d\'Argent',
      companyUrl: 'https://www.desjardins.com',
      location: 'Montréal (Qc), Canada',
      role: 'Analyste-Programmeur',
      expertise: [
        'Développement Fullstack : Java 8+, Kotlin et Angular dans un contexte d\'équipe agile.',
        'Industrialisation : mise en place systématique de tests automatisés (Selenium, JUnit) et intégration continue.',
      ],
      projects: [
        {
          name: 'ALEF (Lutte à l\'évasion fiscale)',
          subtitle: 'Application Web d\'analyse et de détection de comportements fiscaux suspects pour les équipes de conformité',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Application Web d\'analyse et de détection de comportements fiscaux suspects pour les équipes de conformité.',
            },
            {
              label: 'Impact & Complexité',
              text: 'Visualisation avancée de données stratégiques et tableaux de bord analytiques pour les enquêteurs.',
            },
            {
              label: 'Expertise',
              text: 'Développement fullstack Java/Angular avec pipeline de tests automatisés (Selenium, JUnit) et intégration SonarQube.',
            },
          ],
          tags: ['Java 8+', 'Kotlin', 'Angular', 'Spring Boot', 'Spring Data JPA', 'Selenium', 'JUnit', 'SonarQube'],
        },
      ],
    },
    {
      period: 'Jan. 2016 — Jan. 2017',
      company: 'Desjardins — Lutte au Blanchiment d\'Argent',
      companyUrl: 'https://www.desjardins.com',
      location: 'Montréal (Qc), Canada',
      role: 'Programmeur',
      expertise: [
        'Conformité Réglementaire : développement de solutions pour la détection d\'opérations financières suspectes.',
      ],
      projects: [
        {
          name: 'DOIE',
          subtitle: 'Application Web de déclaration d\'opérations importantes en espèces pour les agents de conformité',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Application Web de déclaration d\'opérations importantes en espèces à destination des agents de conformité.',
            },
            {
              label: 'Impact & Complexité',
              text: 'Automatisation des déclarations réglementaires et réduction des erreurs de saisie manuelle.',
            },
            {
              label: 'Expertise',
              text: 'Développement Java J2EE / Spring avec interface jQuery, déployé sur infrastructure Autosys.',
            },
          ],
          tags: ['Java J2EE', 'Spring', 'jQuery'],
        },
        {
          name: 'HBA (Halte au Blanchiment)',
          subtitle: 'Outils d\'extraction et de packaging automatisés pour la transmission de dossiers aux agents CANAFE',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Outils d\'extraction et de packaging automatisés pour la transmission de dossiers aux agents CANAFE.',
            },
            {
              label: 'Impact & Complexité',
              text: 'Réduction du temps de préparation des rapports réglementaires et fiabilisation des exports.',
            },
            {
              label: 'Expertise',
              text: 'Développement batch (DOS/Autosys) et requêtes SQL Oracle complexes.',
            },
          ],
          tags: ['SQL Oracle', 'Autosys', 'Batch'],
        },
      ],
    },
    {
      period: '2013',
      company: 'Escal Consulting',
      companyUrl: 'https://www.escalconsulting.com',
      location: 'Paris, France',
      role: 'Développeur Web — Stage',
      expertise: [],
      projects: [
        {
          name: 'Escal Consulting',
          subtitle: 'Plateforme de gestion de communauté en ligne',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Plateforme de gestion de communauté en ligne sous Zend Framework (PHP) et MySQL.',
            },
            {
              label: 'Impact & Complexité',
              text: 'Finalisation et mise en production de la plateforme avec gestion des utilisateurs et des contenus.',
            },
            {
              label: 'Expertise',
              text: 'Développement PHP / Zend Framework, modélisation et optimisation de bases de données MySQL.',
            },
          ],
          tags: ['PHP', 'Zend Framework', 'MySQL'],
        },
      ],
    },
    {
      period: '2012',
      company: 'Bouygues Telecom',
      companyUrl: 'https://www.bouyguestelecom.fr',
      location: 'Paris, France',
      role: 'Développeur Outils — Stage',
      expertise: [],
      projects: [
        {
          name: 'Bouygues Telecom',
          subtitle: 'Logiciels de synthèse et outils de planning pour les équipes opérationnelles',
          bullets: [
            {
              label: 'Le Produit',
              text: 'Logiciels de synthèse et outils de planning pour les équipes opérationnelles.',
            },
            {
              label: 'Impact & Complexité',
              text: 'Automatisation des rapports de synthèse et optimisation de la planification des ressources.',
            },
            {
              label: 'Expertise',
              text: 'Développement VB.NET avec intégration Office et automatisation de processus métier.',
            },
          ],
          tags: ['VB.NET'],
        },
      ],
    },
  ];
}
