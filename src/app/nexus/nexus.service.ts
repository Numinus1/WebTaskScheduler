import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { Post } from '../models/post.model';
 
@Injectable()
export class NexusService {
 
    public postAdded_Observable = new Subject();
    public postEdited_Observable = new Subject();
    public postEdited;

 
    constructor(){
        this.postEdited = new Post();
    }
 
    notifyPostAddition(){
        this.postAdded_Observable.next();
    }

    notifyPostEdit(){
        this.postEdited_Observable.next();
    }

    setPostEdit(post: Post){
        this.postEdited = post;
        this.notifyPostEdit();
    }


 
}