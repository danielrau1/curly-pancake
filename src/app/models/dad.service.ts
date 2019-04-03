import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DadService {
  private httpOptions = {
    headers: new HttpHeaders({
      Accept:  'application/json',
    })
  };
  constructor(private http: HttpClient) { }


  getDadJoke(): Observable<any> {
    return this.http.get<any>('https://icanhazdadjoke.com/', this.httpOptions);
  }

  // getDadJoke(): Observable<any> {
  //   return this.http.get('https://icanhazdadjoke.com/');
  // }






}
