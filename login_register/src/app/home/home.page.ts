
import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Observable } from 'rxjs';
import { LoginPage } from './../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any;
  loginUser: any;

  constructor(private router: Router,private alertCtrl: AlertController, 
    public post: PostProvider, public username: LoginPage) {
      this.getUsers();
      this.getNameUser();
    }
  ngOnInit() { 
  }

  logout(){
    this.router.navigate(['/login']);
  }
  getUsers(){
    this.post.getPosts().then(data => {
      this.users = data;
      console.log(this.users);
    })
  }
  getNameUser(){

  }
 
 

  
}
