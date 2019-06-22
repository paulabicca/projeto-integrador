
import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any;
  passedUser =  null;

  constructor(private router: Router,private alertCtrl: AlertController, 
    public post: PostProvider, private activatedRoute: ActivatedRoute) {
      this.getUsers(); 
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

 
 

  
}
