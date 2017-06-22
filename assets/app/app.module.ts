import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";

@NgModule({
    declarations: [
      MessageListComponent,
      MessageComponent,
      AppComponent,
      MessageInputComponent,
      MessagesComponent,
      AuthenticationComponent,
      HeaderComponent,
      SigninComponent,
      LogoutComponent,
      SignupComponent
    ],
  imports: [
    BrowserModule, 
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
