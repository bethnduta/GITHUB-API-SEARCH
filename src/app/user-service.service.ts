import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private userName: string;
  
  private repoName: string;
  profile: User;
  userName:string;



  constructor(private http: HttpClient) {
    console.log("Service is ready");

    this.profile = new User("", 0, "", "", "", new Date, 0, 0, "");
    this.userName = "melissakobia";

  }

  getUsers(){
    return this.http.get("https://api.github.com/users/" + this.userName + "?clientId=" + environment.clientId
    + "&clientSecret=" + environment.clientSecret);
  }

  getRepos(){
   return this.http.get("https://api.github.com/users/" + this.userName + "/repos?clientId=" + environment.clientId + "&clientSecret=" + environment.clientSecret);
 }

  getUserInfo() {
    interface ApiResponse {
      name: string;
      public_repo: number;
      avatar_url: string;
      login: string;
      company: string;
      created_at: Date;
      following: number;
      followers: number;
      html_url: string;

    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.userName + "?clientId=" + environment.clientId
        + "&clientSecret=" + environment.clientSecret).toPromise().then(response => {
          
          this.profile = response       

          resolve()
        },
          error => {
            //this.profile.name = "Error"
            //this.quote.author = "Winston Churchill"

            reject(error)
          })
    })
    return promise
  }
  
  

  updateUser(userName:string) {
    this.userName = userName;

  }


}
