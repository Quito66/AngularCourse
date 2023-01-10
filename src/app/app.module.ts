import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './feature/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from "./core/core.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './feature/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ]
})
export class AppModule { }
