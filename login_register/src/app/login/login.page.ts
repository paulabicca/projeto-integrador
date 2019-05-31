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

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    public toastCtrl: ToastController,
    private storage: Storage
    ) {

     }

  ngOnInit() {
  }

  formRegister(){
    this.router.navigate(['/register']);
  }

  async prosesLogin(){
    if(this.username != undefined && this.password != undefined){
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };
      this.postPvdr.postData(body,'proses-api.php').subscribe(async data => {
        var alertmsg = data.msg;
        if(data.sucess){
         //this.storage.set('session_storage', data.result); //cria o armazenamento com isso comentado funciona
          this.router.navigate(['/home']); 
          const toast = await this.toastCtrl.create({
            message: 'Login com sucesso!',
            duration: 2000
          });
          toast.present();
        }else{
          console.log('entrou nesse else');
          const toast = await this.toastCtrl.create({
            message: alertmsg,
            duration: 2000
          });
          toast.present();
        }
      });
    }else{
      const toast = await this.toastCtrl.create({
        message: 'Usuário ou senha estão vazios',
        duration: 2000
      });
      toast.present();
    }
    }//close async prosesLogin()
  }//close class

