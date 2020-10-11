import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
 
@Injectable()
export class AddPostService {
 
    constructor(private http: HttpClient){
 
    }

    addPost(post: Post){
        return this.http.post('http://localhost:3000/api/post/createPost',{
            title : post.title,
            description : post.description
        })
    }
 
}