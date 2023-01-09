import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { user } from '../../../feature/models/user.model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  constructor(private formBuilder:FormBuilder, private userService: UserService,private router:Router){}
  form:FormGroup;
  user:user;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    });
  }
  createUser(){
    console.log(this.form.value);
    this.user = this.form.value;
    this.userService.register(this.user);
    this.router.navigate(['/']);
  }

}
