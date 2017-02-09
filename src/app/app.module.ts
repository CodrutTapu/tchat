import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
    apiKey: 'AIzaSyCQk5G_EndHWLRL2GTf7UWwycq869RGufs',
    authDomain: 'tchat-b7c0e.firebaseapp.com',
    databaseURL: 'https://tchat-b7c0e.firebaseio.com',
    storageBucket: 'tchat-b7c0e.appspot.com',
    messagingSenderId: '787447695601'
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EmailComponent,
        SignupComponent,
        MembersComponent
    ],
        imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        routes
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }

