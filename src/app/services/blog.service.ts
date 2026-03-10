import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
  tag: string;
  readingTime: number;
  excerpt: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly http = inject(HttpClient);

  readonly posts = signal<Post[]>([]);
  readonly activeTag = signal<string>('All');
  readonly isLoading = signal(true);

  readonly filteredPosts = computed(() => {
    const tag = this.activeTag();
    return tag === 'All'
      ? this.posts()
      : this.posts().filter((p) => p.tag === tag);
  });

  readonly tags = computed(() => {
    const unique = [...new Set(this.posts().map((p) => p.tag))];
    return ['All', ...unique];
  });

  loadPosts() {
    this.http.get<Post[]>('/assets/data/posts.json').subscribe({
      next: (data) => {
        this.posts.set(data);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false),
    });
  }
}
