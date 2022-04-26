import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  user: any;
  username!: string;
  constructor(private profileService: ProfileService) {
    this.profileService.getUser().subscribe((user: any) => {
      // console.log(profile);
      this.user = user;
    });

    this.profileService.getRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
    });


  }
  
  findProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getUser().subscribe((user: any) => {
      // console.log(profile);
      this.user = user;
    });

    this.profileService.getRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit(): void {
  }

}
