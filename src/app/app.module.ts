import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './feature/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from "./core/core.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AppModule { }
