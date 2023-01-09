import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    NavbarComponent,
    SignupComponent,
    SigninComponent
  ],
    exports:[
      NavbarComponent,
      SignupComponent,
      SigninComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule
    ],
  })
export class CoreModule { }