import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-slate-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12),transparent_60%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_60%)]"></div>

      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-[0.03]"
           style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 64px 64px;">
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <!-- Avatar -->
        <div class="mx-auto mb-8 w-24 h-24 rounded-full shadow-2xl ring-4 ring-white/10 overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQH_rEuWATaw2Q/profile-displayphoto-crop_800_800/B4EZs8WCVqJQAI-/0/1766243969269?e=1774483200&v=beta&t=n7c-TXRl-QgNeK1eNn9hfSjxQKlq1xlNRjGs55E-O7k"
            alt="David Rion"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          10+ ans · Desjardins GTI
        </div>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
          David <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">Rion</span>
        </h1>

        <p class="text-xl sm:text-2xl font-medium text-zinc-400 mb-3">
          Tech Lead · M.Ing · Desjardins GTI
        </p>

        <p class="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-3">
          J'évolue depuis plus de 10 ans au cœur de l'écosystème technologique du Groupe Desjardins. Fort d'une double formation d'ingénieur (ÉTS Montréal & ECE Paris), je combine vision stratégique et expertise technique pointue en architectures Java/Kotlin et Angular.
        </p>

        <p class="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed mb-10">
          J'architecture des systèmes critiques, pilote des escouades agiles et transforme la complexité technique en solutions robustes à haut impact — guidé par le <span class="text-indigo-400 font-medium">Software Craftsmanship</span>, le <span class="text-indigo-400 font-medium">Clean Code</span> et les principes <span class="text-indigo-400 font-medium">DevOps</span>.
        </p>

        <!-- Social links -->
        <div class="flex items-center justify-center gap-4 flex-wrap">
          <a href="https://www.linkedin.com/in/riondavid/" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>

          <a href="https://github.com/davidrion" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm transition-all duration-200 border border-zinc-700 hover:border-zinc-600 hover:-translate-y-0.5">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>

          <a href="mailto:david@rion.dev"
             class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm transition-all duration-200 border border-zinc-700 hover:border-zinc-600 hover:-translate-y-0.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Contact
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 no-print">
          <span class="text-xs uppercase tracking-widest">Scroll</span>
          <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
