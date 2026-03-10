import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, ExperienceComponent, SkillsComponent, BlogComponent],
  templateUrl: './app.html',
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
