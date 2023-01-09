import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../../feature/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router){

  }
  public getCurrentUser(): any {
    var user = JSON.parse(localStorage.currentUser);
    if (!user) {
      return null;
    }
    return user;
  }
  public removeCurrentUser(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/SignIn']);

  }
  public setCurrentUser(user: any): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  public isAuhenticated(): boolean {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return true;
    }
    return false;
  }
}