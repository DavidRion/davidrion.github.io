import { Component } from '@angular/core';

interface Experience {
  period: string;
  company: string;
  role: string;
  bullets: string[];
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
      company: 'Desjardins GTI',
      role: 'Team Lead / Tech Lead — Analyste-Programmeur',
      bullets: [
        'Leadership d\'escouade : encadrement technique d\'équipes de développement, promotion des standards de qualité (Clean Code, Software Craftsmanship) et mentorat.',
        'Architecture & Conception : analyse et design de solutions robustes en environnement Microservices.',
        'Sécurité pour Tous (SPT) (2021-Présent) : pilotage technique d\'une application critique de sécurité.',
        'Gestion Recouvrement de prêts (GRP) (2018-2021) : refonte et modernisation du système de recouvrement.',
        'Expertise Cloud : déploiement et gestion via Cloud Foundry, automatisation des pipelines avec Concourse et Jenkins.',
      ],
      tags: ['Java', 'Kotlin', 'Spring Boot', 'Angular', 'Microservices', 'Cloud Foundry', 'Concourse', 'Jenkins'],
      current: true,
    },
    {
      period: 'Jan. 2017 — Avr. 2019',
      company: 'Desjardins GTI',
      role: 'Analyste-Programmeur Senior',
      bullets: [
        'Développement Fullstack intensif avec Java 8+, Kotlin et Angular.',
        'Industrialisation : mise en place systématique de tests automatisés (Selenium, JUnit) et intégration continue.',
        'Lutte à l\'évasion fiscale (ALEF) : conception d\'une application Web pour l\'analyse de données stratégiques.',
      ],
      tags: ['Java 8+', 'Kotlin', 'Angular', 'Spring Boot', 'Spring Data JPA', 'Selenium', 'JUnit', 'SonarQube'],
    },
    {
      period: 'Jan. 2016 — Jan. 2017',
      company: 'Desjardins — Direction LBA',
      role: 'Programmeur',
      bullets: [
        'Conformité Réglementaire : développement de solutions pour la détection d\'opérations suspectes.',
        'Projet DOIE : application Web de déclaration d\'opérations importantes en espèces (Java J2EE, Spring, jQuery).',
        'Projet HBA (Halte au Blanchiment) : outils d\'extraction et de packaging automatisés pour les agents CANAFE (SQL Oracle, Batch/DOS, Autosys).',
      ],
      tags: ['Java J2EE', 'Spring', 'jQuery', 'SQL Oracle', 'Autosys', 'Batch'],
    },
    {
      period: '2012 — 2013',
      company: 'Escal Consulting / Bouygues Telecom',
      role: 'Développeur Web & Outils — Stages',
      bullets: [
        'Escal Consulting (Paris, 2013) : finalisation d\'une plateforme de gestion de communauté sous Zend Framework (PHP) et MySQL.',
        'Bouygues Telecom (Paris, 2012) : création de logiciels de synthèse et d\'outils de planning en VB.NET.',
      ],
      tags: ['PHP', 'Zend Framework', 'MySQL', 'VB.NET'],
    },
  ];
}
