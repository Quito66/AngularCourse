import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private userService: UserService, private authService: AuthService, private router:Router){}
  form: FormGroup;
  ngOnInit():void{
    this.form = this.formBuilder.group({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    });
  }
  signIn(){
    console.log('entro al signIn');
    var users = this.userService.getalluser();
    var user = users.find((x: { email: any; }) => x.email === this.form.value.email);
    console.log(this.userService.users);
    if ( this.form.value.password== user?.password && this.form.value.email == user?.email){
      this.authService.setCurrentUser(user);
      this.router.navigate(['/profile']);
    }
  }

}
