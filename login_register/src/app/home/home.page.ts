import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,private alertCtrl: AlertController) {  }
  ngOnInit() { 
  }

  logout(){
    this.router.navigate(['/login']);
  }

 
 
}
