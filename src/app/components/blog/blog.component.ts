import { Component, OnInit, inject } from '@angular/core';
import { NgClass, DatePipe } from '@angular/common';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgClass, DatePipe],
  template: `
    <section id="blog" class="mb-16 scroll-mt-16 lg:mb-36 lg:scroll-mt-24">

      <!-- Mobile sticky header -->
      <div class="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-slate-900/90 px-6 py-5 backdrop-blur lg:hidden">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200">Blog</h2>
      </div>

      <!-- Tag filters -->
      <div class="flex flex-wrap gap-2 mb-8">
        @for (tag of blog.tags(); track tag) {
          <button
            (click)="blog.activeTag.set(tag)"
            class="rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200"
            [ngClass]="blog.activeTag() === tag
              ? 'bg-teal-400/20 text-teal-300'
              : 'text-slate-500 hover:text-slate-200'">
            {{ tag }}
          </button>
        }
      </div>

      <!-- Loading -->
      @if (blog.isLoading()) {
        <div class="flex justify-center py-12">
          <div class="w-6 h-6 rounded-full border-2 border-teal-400 border-t-transparent animate-spin"></div>
        </div>
      }

      <!-- Posts -->
      @if (!blog.isLoading()) {
        <ol class="group/list space-y-2">
          @for (post of blog.filteredPosts(); track post.id) {
            <li>
              <a [href]="post.url"
                 class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4
                        lg:hover:!opacity-100 lg:group-hover/list:opacity-50 block">

                <!-- Hover card highlight -->
                <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition
                            lg:-inset-x-6 lg:block
                            lg:group-hover:bg-slate-800/50
                            lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]
                            lg:group-hover:drop-shadow-lg">
                </div>

                <!-- Date -->
                <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 pt-0.5">
                  {{ post.date | date:'MMM yyyy' : '' : 'fr-FR' }}
                  <span class="ml-2 text-slate-600">· {{ post.readingTime }} min</span>
                </header>

                <!-- Content -->
                <div class="z-10 sm:col-span-6">
                  <h3 class="font-medium leading-snug text-slate-200 group-hover:text-teal-300 transition-colors duration-200 inline-flex items-baseline gap-1">
                    {{ post.title }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         class="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform duration-200
                                group-hover:translate-x-1 group-hover:-translate-y-1 ml-1">
                      <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
                    </svg>
                  </h3>
                  <p class="mt-1 text-sm leading-normal text-slate-400">{{ post.excerpt }}</p>
                  <ul class="mt-2 flex flex-wrap gap-2">
                    <li>
                      <span class="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 leading-5">
                        {{ post.tag }}
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          }

          @if (blog.filteredPosts().length === 0) {
            <p class="text-slate-500 text-sm">Aucun article dans cette catégorie.</p>
          }
        </ol>
      }

    </section>
  `,
})
export class BlogComponent implements OnInit {
  readonly blog = inject(BlogService);

  ngOnInit() {
    this.blog.loadPosts();
  }
}
