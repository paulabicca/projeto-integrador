import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private postPvdr: PostProvider, 
    public toastCtrl: ToastController) {
   }

  ngOnInit() {
  }


  async login(){
    if(this.username != undefined && this.password != undefined){
      const toast = await this.toastCtrl.create({
        message: 'Campos preenchidos',
        duration: 2000
      });
      toast.present();
    }else{
      const toast = await this.toastCtrl.create({
        message: 'Usuário ou senha estão vazios',
        duration: 2000
      });
      toast.present();
    }
    }//close async prosesLogin()
  }//close class

