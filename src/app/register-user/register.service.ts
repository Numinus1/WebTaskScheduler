import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {User} from '../models/user.model'

@Injectable()
export class RegisterService {

    constructor (private http: HttpClient){

    }

    validateLogin(user: User){
        return this.http.post('http://localhost:3000/api/user/register',{
            username : user.username,
            password : user.password
        })
    }
}