import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  updateProfile(username: string | undefined) {
    throw new Error('Method not implemented.');
  }
  private username:string = 'bethnduta';
  private client_id:string = 'da0bc7b80a8cf72abac4';
  private client_Secret:string = 'd7e6cb289367824141c101eb6259f56779713b96';
  // client_id: string | undefined;
  // client_secret: string | undefined;
  private _http: any;
  getProfileInfo: any;
  getProfileRepos: any;
  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'bethnduta';
    console.log("service is now ready!");

  }

  getUser(){
    return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_Secret)
        .map((res: { json: () => any; }) => res.json());
}
  
//   getUser(){
//     return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_Secret)
//         .map((res: { json: () => any; }) => res.json());
// }

getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_Secret)
            .map((res: { json: () => any; }) => res.json());
    }

// getRepos(){
//   return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_Secret)
//       .map((res: { json: () => any; }) => res.json());
// }

updateUsername(username:string){
  this.username = username;
}
}