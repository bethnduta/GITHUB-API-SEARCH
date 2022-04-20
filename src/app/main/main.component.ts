import { Component, OnInit } from '@angular/core';
//import { User } from '../user';
import { UserService } from '../user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { RepositoryService } from '../repository-service/repository-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  //users:User;

  profile: any;
  repos: any;
  userName: string;



  constructor(
    private userService: UserService, private repositoryService: RepositoryService

  ) {
    this.userService.getUsers().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.userService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

  }


  findUser() {
    this.userService.updateUser(this.userName);
    this.userService.getUserInfo()
    this.profile = this.userService.profile;

    this.repositoryService.updateUser(this.userName);
    this.repositoryService.getRepoInformation()
    this.repos = this.repositoryService.repos;
  }




  ngOnInit() {
  }

}
