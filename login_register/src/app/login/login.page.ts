import { HomePage } from './../home/home.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usernameLogin: string;
  password: string;
  cadastrado; //variável que verifica se funcionário existe no banco

   loginFuncionario = {
    funcionario1: "master",
    funcionario2: "desenvolvedor",
    funcionario3: "paula",
    funcionario4: "vanessa",
    funcionario5: "rafael",
    funcionario6: "funcionario",
  };
  senhaFuncionario = {
    senhafunc1: "master",
    senhafunc2: "desenvolvedor",
    senhafunc3: "paula",
    senhafunc4: "vanessa",
    senhafunc5: "rafael",
    senhafunc6: "funcionario",
  };
  constructor(private router: Router, private postPvdr: PostProvider, 
    public toastCtrl: ToastController, private nav: NavController) {
   }

  ngOnInit() {
  }


  async checkLogin(){
    this.cadastrado = false;
    if(this.usernameLogin != undefined && this.password != undefined){
      this.checkUsername(); //checa se os dados digitados são iguais ao do objeto 
      this.checkPassword();
      this.login();
    }else{
      const toast = await this.toastCtrl.create({
      message: 'Usuário ou senha estão vazios',
      duration: 2000
      });
      toast.present();
    }
  }
    async login(){
      if(this.cadastrado){
        this.router.navigate(['/home',{user: this.usernameLogin}]);
    
        const toast = await this.toastCtrl.create({
          message: 'Login com sucesso!',
          duration: 2000
        });
        toast.present();
      }else{
        const toast = await this.toastCtrl.create({
          message: 'Dados incorretos',
          duration: 2000
        });
        toast.present();
      }
    }

    async checkUsername(){
      for (var key in this.loginFuncionario) {
        if(this.usernameLogin == this.loginFuncionario[key]){
          //console.log(this.loginFuncionario[key]);
          this.cadastrado = true;
          break;
        }else{
          this.cadastrado = false;
        }
      }
    }

    async checkPassword(){
      for (var key in this.senhaFuncionario) {
        if(this.password == this.senhaFuncionario[key]){
          this.cadastrado = true;
          break;
        }else{
          this.cadastrado = false;
        }
      }
    }

  }//close class

