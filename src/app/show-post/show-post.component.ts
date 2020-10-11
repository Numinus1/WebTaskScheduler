import { Component, OnInit } from '@angular/core';

import { ShowPostService } from './show-post.service';
import {NexusService} from '../nexus/nexus.service';
import { Post } from '../models/post.model';
 
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  providers: [ ShowPostService ]
})

export class ShowPostComponent implements OnInit {
 
  public posts : any [];
 
  constructor(private showPostService: ShowPostService, private nexusService: NexusService) {
       
  }
 
  ngOnInit(){
    this.getAllPost();

    this.nexusService.postAdded_Observable.subscribe(res => {
        this.getAllPost();
    });
  }
  
  
  getAllPost(){
    this.showPostService.getAllPost().subscribe(result => {
        this.posts = result['data'];
    });

  }

  pingClick(post: Post){
    console.log("logged ping");   
    console.log(post.description);
    this.nexusService.setPostEdit(post);
};
 
}