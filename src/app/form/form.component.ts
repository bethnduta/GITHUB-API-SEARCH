import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  username:string;
  constructor() { 
    findUser (){
      this.userService.updateUser(this.username);
  
    }
  
  }

  ngOnInit(): void {
  }

}
