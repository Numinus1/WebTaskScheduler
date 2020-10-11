import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient){

    }

    removeAll(){
        return this.http.post('http://localhost:3000/api/post/Clear', {})
    }
}