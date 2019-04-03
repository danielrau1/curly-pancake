import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadService {

  constructor(private http: HttpClient) { }

  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };
  // getDadJoke(): Observable<any> {
  //   return this.http.get('https://icanhazdadjoke.com/', this.httpOptions );
  // }




  getDadJoke(): Observable<any> {
    let req = {
      method: 'GET',
      url: 'https://icanhazdadjoke.com/',
      headers: {'Content-Type': 'application/json'}
    };

    return this.http(req).then(function (response) {
      $scope.userData = response.data;
    });
  }




}
