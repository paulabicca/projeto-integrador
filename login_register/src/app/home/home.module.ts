import { NgCalendarModule } from 'ionic2-calendar';
import { NgModule, LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

import localePT from '@angular/common/locales/pt';
import localeExtraPT from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT, 'pt', localeExtraPT);

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  declarations: [HomePage]
})

export class HomePageModule {}
