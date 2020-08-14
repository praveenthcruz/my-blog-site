import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../models/blog';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  Blog:any = [];

  constructor(public blogsService: BlogService, private router: Router) { }
  blogs: Observable<Blog[]>;

  
 
  /*deleteBlog(blog: Blog) {
    this.blogsService.blogs = this.blogsService.blogs.filter((b) => {
      if (b !== blog) {
        return b;
      }
    });
    console.log(this.blogsService.blogs)
  }*/

    deleteBlog(id: number) {
    this.blogsService.deleteBlog(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  ngOnInit() {
    this.reloadData();
  }

  
  reloadData() {
    this.blogs = this.blogsService.getBlogList();
  }


  onClickBlog(id: number) {
    this.router.navigate(['view-blog',id]);
  }
  onclickCreate(){
    this.router.navigate(['create-blog']);
  }

  editBlog(id: number){
    this.router.navigate(['edit-blog', id]);
  }
  
 

  
}
