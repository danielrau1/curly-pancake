import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadService {

  constructor(private http: HttpClient) { }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  getDadJoke(): Observable<any> {

       return this.http.get('https://icanhazdadjoke.com/', this.httpOptions);
     }


  // getDadJoke(): Observable<any> {
  //   return this.http.get('https://icanhazdadjoke.com/');
  // }

}
