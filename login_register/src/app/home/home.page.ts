
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { formatDate } from '@angular/common';
import {CalendarComponent } from 'ionic2-calendar/calendar';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
  mes = null;

  constructor(private router: Router,private alertCtrl: AlertController, 
    public post: PostProvider, private activatedRoute: ActivatedRoute, @Inject(LOCALE_ID) private locale: string ) {
     
    }
  ngOnInit() { 
    this.resetEvent();
  }

  logout(){
    this.router.navigate(['/login']);
  }
  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    locale: 'pt',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

   // Cria o evento e o carrega no formato certo
   addEvent() {
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
    }

    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;

      eventCopy.startTime = new Date(Date.UTC( start.getUTCDate(), start.getUTCMonth(), start.getUTCFullYear()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCDate(), end.getUTCMonth(), end.getUTCFullYear()  + 1));
    }

    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }


  // Muda para mês/semana/dia
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Foca no hoje
  today() {
    this.calendar.currentDate = new Date();
  }

  // Mês/ano
  onViewTitleChanged(title) {
    this.viewTitle = title;
    console.log("mês", title);
  }

  // Quando o evento é clicado
  async onEventSelected(event) {
    // Usa Angular date pipe para converter
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
   
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'De: ' + start + '<br><br>Até: ' + end,
      buttons: ['OK']
    });
    alert.present();
  }

  // O horário é clicado
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
    /*console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
    (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);*/
  }  
}
