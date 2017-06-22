import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";

@NgModule({
    declarations: [
      MessageListComponent,
      MessageComponent,
      AppComponent,
      MessageInputComponent,
      MessagesComponent,
      AuthenticationComponent,
      HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}
