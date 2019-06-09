import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostProvider {
 
  constructor(public http: HttpClient) { 
    this.getPosts();
  }
  apiUrl = 'https://jsonplaceholder.typicode.com'; //pega a api 

  getPosts(){
   return new Promise( pegaData =>{
    this.http.get(this.apiUrl+'/users').subscribe( data => {
      pegaData(data);
    }, err =>{
      console.log(err);
    });
   });
  }
  
}
