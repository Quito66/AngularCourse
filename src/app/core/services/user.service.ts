import { Injectable } from '@angular/core';
import { user } from '../../feature/models/user.model';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: user[]=[];
  constructor(private authService: AuthService) { }
  login(user:user){
    this.authService.setCurrentUser(user);
    return true;
  }
 
   register(user:user){
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
   }
   getalluser(){ 
    var storedUsers = JSON.parse(localStorage.users);
    return storedUsers;
   }
}
