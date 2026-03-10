import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, ExperienceComponent, SkillsComponent, BlogComponent],
  template: `
    <div class="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 font-sans">
      <div class="mx-auto min-h-screen max-w-screen-xl px-6 lg:px-24">
        <div class="lg:flex lg:gap-4 lg:justify-between">

          <!-- ═══ LEFT PANEL (sticky) ═══ -->
          <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 py-12">
            <div>
              <!-- Name -->
              <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                David Rion
              </h1>
              <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200">
                Tech Lead · M.Ing
              </h2>
              <p class="mt-4 max-w-xs leading-normal text-sm">
                J'architecture des systèmes critiques et pilote des escouades agiles chez Desjardins GTI depuis plus de 10 ans.
              </p>

              <!-- Nav (desktop only) -->
              <nav class="hidden lg:block mt-16" aria-label="Navigation">
                <ul class="w-max">
                  @for (item of navItems; track item.id) {
                    <li>
                      <a [href]="'#' + item.id"
                         class="group flex items-center py-3 cursor-pointer">
                        <span class="mr-4 h-px bg-slate-600 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200"
                              [ngClass]="activeSection() === item.id ? 'w-16 !bg-slate-200' : 'w-8'">
                        </span>
                        <span class="text-xs font-bold uppercase tracking-widest transition-colors duration-200 group-hover:text-slate-200"
                              [ngClass]="activeSection() === item.id ? 'text-slate-200' : 'text-slate-500'">
                          {{ item.label }}
                        </span>
                      </a>
                    </li>
                  }
                </ul>
              </nav>
            </div>

            <!-- Social links -->
            <ul class="ml-1 mt-8 flex items-center gap-5 text-slate-400">
              <li>
                <a href="https://github.com/davidrion" target="_blank" rel="noopener"
                   aria-label="GitHub"
                   class="block hover:text-slate-200 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/riondavid/" target="_blank" rel="noopener"
                   aria-label="LinkedIn"
                   class="block hover:text-slate-200 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
                </a>
              </li>
              <li>
                <a href="mailto:david.rion@gmail.com"
                   aria-label="Email"
                   class="block hover:text-slate-200 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                </a>
              </li>
            </ul>
          </header>

          <!-- ═══ RIGHT PANEL (scrollable) ═══ -->
          <main class="lg:w-3/5 lg:py-24 pb-24">

            <!-- ABOUT -->
            <section id="about" class="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">
              <div class="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur lg:hidden">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">À propos</h2>
              </div>

              <!-- Avatar + photo -->
              <div class="mb-8 flex items-center gap-4">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQH_rEuWATaw2Q/profile-displayphoto-crop_800_800/B4EZs8WCVqJQAI-/0/1766243969269?e=1774483200&v=beta&t=n7c-TXRl-QgNeK1eNn9hfSjxQKlq1xlNRjGs55E-O7k"
                     alt="David Rion"
                     class="w-16 h-16 rounded-full object-cover ring-2 ring-slate-700 lg:hidden" />
              </div>

              <div class="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  J'évolue depuis plus de 10 ans au cœur de l'écosystème technologique du
                  <a href="https://www.desjardins.com" target="_blank" rel="noopener"
                     class="font-medium text-slate-200 hover:text-teal-300 transition-colors">Groupe Desjardins</a>.
                  Fort d'une double formation d'ingénieur
                  (<span class="text-slate-200 font-medium">ÉTS Montréal</span> &amp; <span class="text-slate-200 font-medium">ECE Paris</span>),
                  je combine vision stratégique et expertise technique pointue en architectures Java/Kotlin et Angular.
                </p>
                <p>
                  Mon rôle dépasse la simple écriture de code : j'architecture des systèmes critiques, je pilote des
                  <span class="text-slate-200 font-medium">escouades agiles</span> et j'assure la cohérence entre les
                  besoins d'affaires et l'excellence logicielle.
                </p>
                <p>
                  Adepte rigoureux du
                  <span class="text-teal-300 font-medium">Software Craftsmanship</span>,
                  du <span class="text-teal-300 font-medium">Clean Code</span>
                  et des principes <span class="text-teal-300 font-medium">DevOps</span>,
                  je m'investis quotidiennement dans le mentorat d'équipes pour promouvoir une culture de qualité
                  et de performance.
                </p>
              </div>
            </section>

            <!-- EXPERIENCE -->
            <app-experience />

            <!-- SKILLS -->
            <app-skills />

            <!-- BLOG -->
            <app-blog />

            <!-- Footer -->
            <footer class="mt-24 pb-6 text-xs text-slate-500">
              <p>Construit avec Angular 17+ &amp; Tailwind CSS · © {{ year }} David Rion</p>
            </footer>
          </main>

        </div>
      </div>
    </div>
  `,
})
export class App implements OnInit, OnDestroy {
  readonly year = new Date().getFullYear();
  readonly activeSection = signal('about');
  private observer?: IntersectionObserver;

  readonly navItems = [
    { id: 'about',      label: 'À propos'    },
    { id: 'experience', label: 'Expériences' },
    { id: 'skills',     label: 'Skills'      },
    { id: 'blog',       label: 'Blog'        },
  ];

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((s) => this.observer?.observe(s));
    }, 100);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
