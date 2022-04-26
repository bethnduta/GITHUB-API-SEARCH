import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string = 'bethnduta';
  private client_id:string = '59ecb792fe1225cbe7f3';
  private client_Secret:string = '14f9f9efce151e465717de614a709c86ceb95b8e';
  // client_id: string | undefined;
  // client_secret: string | undefined;
  private _http: any;
  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'bethnduta';
    console.log("service is now ready!");

  }

  getUser(){
    return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_Secret)
    .pipe(map((res) => res));
  }
  


  getRepos(){
        return this.http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_Secret)
        .pipe(map((res) => res));
    }
  updateProfile(username: any) {
    this.username = username;
  }


}