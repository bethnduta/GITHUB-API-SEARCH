import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string | undefined;
  private clientid = '';
  private clientSecret = '';
  constructor(private http:Http) {
    console.log("service is now ready!");
    this.username = 'bethnduta';console.log("service is now ready!");
    this.username = 'bethnduta';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/", this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientSecret);
    .map(res => res.json());
  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/", this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientSecret);
    .map(res => res.json());
  }

  updateProfile(username:string){
    this.username = username;
  }
}
