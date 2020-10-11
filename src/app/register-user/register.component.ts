import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RegisterService} from './register.service';
import {User} from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [RegisterService]

})

export class RegisterComponent {
    form: FormGroup;
    submitted = false;
    genderList: any = ['Select', 'Male', 'Female'];
    public user: User;

    constructor(private readonly fb: FormBuilder,
        private registerService: RegisterService,
        private router: Router){
            this.user = new User();
    }

    ngOnInit(){
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(8)]],
            dateOfBirth: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            gender: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.form.invalid){
            return;
        }
        else{
            console.log("form valid;");
            console.log("username: ", this.form.controls['username'].value);
            console.log("password: ", this.form.controls['password'].value);
            this.user.username = this.form.controls['username'].value;
            this.user.password = this.form.controls['password'].value;
            this.registerService.validateLogin(this.user).subscribe(result => {
                if(result['status'] === 'success'){
                    console.log("user added");
                    this.goHome();
                }
                else{
                    console.log("user addition error");
                }
            })
        }
    }

    goHome(){
        this.router.navigate(['/bibo']);
    }

    get f() {return this.form.controls;}
}