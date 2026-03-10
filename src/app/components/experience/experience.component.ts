import { Component } from '@angular/core';

interface Project {
  name: string;
  period?: string;
  description: string;
}

interface Experience {
  period: string;
  company: string;
  role: string;
  expertise: string[];
  projects: Project[];
  tags: string[];
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
      company: 'Desjardins - Sécurité et Valorisation de l\'information',
      role: 'Team / Tech Lead — Analyste-Programmeur',
      expertise: [
        'Direction Technique : Pilotage d\'escouades agiles et garant de l\'intégrité architecturale des solutions.',
        'Culture Engineering : Évangélisation des pratiques Clean Code et Software Craftsmanship via le mentorat et les revues de code.',
        'Architecture Microservices : Design de systèmes robustes et scalables, alignés sur les besoins d\'affaires stratégiques.',
        'Écosystème DevOps : Automatisation des cycles de vie applicatifs (CI/CD) sur Cloud Foundry avec Concourse et Jenkins.',
      ],
      projects: [
        {
          name: 'SPT (Sécurité pour Tous)',
          period: '2021 — Présent',
          description: 'Pilotage technique et architecture d\'une plateforme critique de sécurité.',
        },
        {
          name: 'MDP (Gestion de Mot de passe robustes)',
          period: '2025 — Présent',
          description: 'Pilotage technique et architecture d\'une plateforme critique de sécurité.',
        },
        {
          name: 'GRP (Gestion Recouvrement de prêts)',
          period: '2018 — 2021',
          description: 'Refonte majeure et modernisation technologique du système de recouvrement.',
        },
      ],
      tags: ['Java', 'Kotlin', 'Spring Boot', 'Angular', 'Microservices', 'Cloud Foundry', 'Concourse', 'Jenkins'],
      current: true,
    },
    {
      period: 'Jan. 2017 — Avr. 2019',
      company: 'Desjardins - Lutte au Blanchiment d\'Argent',
      role: 'Analyste-Programmeur',
      expertise: [
        'Développement Fullstack : Java 8+, Kotlin et Angular dans un contexte d\'équipe agile.',
        'Industrialisation : mise en place systématique de tests automatisés (Selenium, JUnit) et intégration continue.',
      ],
      projects: [
        {
          name: 'ALEF (Lutte à l\'évasion fiscale)',
          description: 'Conception d\'une application Web pour l\'analyse de données fiscales stratégiques.',
        },
      ],
      tags: ['Java 8+', 'Kotlin', 'Angular', 'Spring Boot', 'Spring Data JPA', 'Selenium', 'JUnit', 'SonarQube'],
    },
    {
      period: 'Jan. 2016 — Jan. 2017',
      company: 'Desjardins — Lutte au Blanchiment d\'Argent',
      role: 'Programmeur',
      expertise: [
        'Conformité Réglementaire : développement de solutions pour la détection d\'opérations financières suspectes.',
      ],
      projects: [
        {
          name: 'DOIE',
          description: 'Application Web de déclaration d\'opérations importantes en espèces (Java J2EE, Spring, jQuery).',
        },
        {
          name: 'HBA (Halte au Blanchiment)',
          description: 'Outils d\'extraction et de packaging automatisés pour les agents CANAFE (SQL Oracle, Batch/DOS, Autosys).',
        },
      ],
      tags: ['Java J2EE', 'Spring', 'jQuery', 'SQL Oracle', 'Autosys', 'Batch'],
    },
    {
      period: '2012 — 2013',
      company: 'Escal Consulting / Bouygues Telecom',
      role: 'Développeur Web & Outils — Stages',
      expertise: [],
      projects: [
        {
          name: 'Escal Consulting',
          period: 'Paris, 2013',
          description: 'Finalisation d\'une plateforme de gestion de communauté sous Zend Framework (PHP) et MySQL.',
        },
        {
          name: 'Bouygues Telecom',
          period: 'Paris, 2012',
          description: 'Création de logiciels de synthèse et d\'outils de planning en VB.NET.',
        },
      ],
      tags: ['PHP', 'Zend Framework', 'MySQL', 'VB.NET'],
    },
  ];
}
