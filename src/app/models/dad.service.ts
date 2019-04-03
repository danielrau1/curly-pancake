import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadService {

  constructor(private http: HttpClient) { }

  getDadJoke(): Observable<any> {
    return this.http.get('https://icanhazdadjoke.com/api');
  }

}
