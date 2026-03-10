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
  template: `
    <section id="experience" class="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">

      <!-- Mobile sticky header -->
      <div class="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur lg:hidden">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">Expériences</h2>
      </div>

      <ol class="group/list space-y-2">
        @for (exp of experiences; track exp.role) {
          <li class="mb-6">
            <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4
                        lg:hover:!opacity-100 lg:group-hover/list:opacity-50">

              <!-- Hover card highlight -->
              <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition
                          lg:-inset-x-6 lg:block
                          lg:group-hover:bg-slate-800/50
                          lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
                          lg:group-hover:drop-shadow-lg">
              </div>

              <!-- Date range -->
              <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 whitespace-nowrap pt-0.5">
                {{ exp.period }}
                @if (exp.current) {
                  <span class="ml-1 inline-block w-2 h-2 rounded-full bg-teal-400 align-middle"></span>
                }
              </header>

              <!-- Content -->
              <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug">
                  <span class="text-slate-200 group-hover:text-teal-300 transition-colors duration-200">
                    {{ exp.role }}
                  </span>
                  <span class="text-slate-400 font-normal"> · {{ exp.company }}</span>
                </h3>

                <ul class="mt-2 space-y-1.5">
                  @for (bullet of exp.bullets; track bullet) {
                    <li class="flex items-start gap-2 text-sm leading-normal text-slate-400">
                      <span class="mt-2 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0"></span>
                      {{ bullet }}
                    </li>
                  }
                </ul>

                <ul class="mt-3 flex flex-wrap gap-2">
                  @for (tag of exp.tags; track tag) {
                    <li>
                      <span class="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1
                                   text-xs font-medium text-teal-300 leading-5">
                        {{ tag }}
                      </span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </li>
        }
      </ol>

    </section>
  `,
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
