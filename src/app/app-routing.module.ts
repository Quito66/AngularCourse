import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './core/components/signin/signin.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { HomeComponent } from './feature/home/home.component';
import { ProfileComponent } from './feature/profile/profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
