import { Component, ViewChild, ElementRef, Input } from '@angular/core';

import { AddPostService } from './add-post.service';
import { Post } from '../models/post.model';
import {NexusService} from '../nexus/nexus.service';
 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  providers: [ AddPostService ]
})
export class AddPostComponent {
 

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post : Post;

  constructor(private addPostService: AddPostService, private nexusService: NexusService) {
      this.post = new Post();
  }

  ngOnInit(){
    this.nexusService.postEdited_Observable.subscribe(res => {
      this.post = this.nexusService.postEdited;
      console.log("post title: ", this.post.title);
  });
  }
 
  addPost() {
    if(this.post.title && this.post.description){
        this.addPostService.addPost(this.post).subscribe(res =>{
            console.log('response is ', res);
            this.nexusService.notifyPostAddition();
            this.closeBtn.nativeElement.click();
        });
    } else {
        alert('Title and Description required');
    }
  }
 
}