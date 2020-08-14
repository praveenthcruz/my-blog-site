import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Blog } from '../models/blog';
import { Title } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})

export class EditBlogComponent implements OnInit { 
  
  currentBlog: Blog;
 
  blogForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', Validators.required),
    date: new FormControl(),
    imgUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })
  constructor(private blogService: BlogService, private router: Router,private activeRouter: ActivatedRoute, private http: HttpClient) { }


  onFormSubmit() {
    if (this.blogForm.valid) {
      this.blogForm.controls.id.setValue(this.currentBlog.id);
      this.blogForm.controls.date.setValue(new Date());
      this.blogService.editBlog(this.blogForm.value)
      this.router.navigate([''])
    }else{
      console.log(this.blogForm.valid)
    }

  }

  getId() {
    return Math.max.apply(Math, this.blogService.blogs.map(function (o) { return o.id; }))
  }

  get imageUrl() {
    return this.blogForm.value.imgUrl;
  }

  ngOnInit(): void {

    const id = +this.activeRouter.snapshot.paramMap.get('id');

    this.http.get('https://run.mocky.io/v3/91548e68-e7e9-4609-83f1-37724d4bb902').subscribe(
      (res:Blog[]) => {
        for(var i =0; i < resizeBy.length; i++){
          if(id=== res[i].id){
            this.currentBlog =res[i];
            console.log(this.currentBlog);


            break;
          }
        }
      }
    );
  }



}


  
  



