import { Component, ViewChild, ElementRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {Router} from '@angular/router';

import { AddPostComponent } from '../add-post/add-post.component';
import { NexusService } from '../nexus/nexus.service';
import { HomeService } from './home.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeService]
})
export class HomeComponent {
   bsModalRef: BsModalRef;

   @ViewChild('addPostBtn') addBtn: ElementRef;

   constructor(private modalService: BsModalService,
        private homeService: HomeService,
        private nexusService: NexusService,
        private router: Router){
          this.nexusService.postEdited_Observable.subscribe(res => {
            console.log("pinged in home");
            this.addBtn.nativeElement.click();
        });
        }

   public openAdd(){
       this.bsModalRef = this.modalService.show(AddPostComponent);
   }
   

   clearPosts(){
        this.homeService.removeAll().subscribe(res =>{
            console.log('clear response: ', res);
            this.nexusService.notifyPostAddition();
        });
   }

   goHome(){
    this.router.navigate(['/login']);
  }
}