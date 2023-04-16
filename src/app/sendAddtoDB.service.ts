import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class SendAddtoDB {
   baseUrl="http://localhost:8081/user";
  constructor(private httpClient: HttpClient) { }


  registerAddress(user: Address): Observable<Object> {
     console.log(user);
     return this.httpClient.post(`${this.baseUrl}`,user);
  }
}