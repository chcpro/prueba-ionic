import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public http: HttpClient) { }

  
  URL_API = "http://66.97.39.2:4000/api/";

  getUsers() {
    return this.http.get<any[]>(this.URL_API + "users");
  }
}
