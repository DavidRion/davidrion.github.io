import { Component, OnInit, inject } from '@angular/core';
import { NgClass, DatePipe } from '@angular/common';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgClass, DatePipe],
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  readonly blog = inject(BlogService);

  ngOnInit() {
    this.blog.loadPosts();
  }
}
