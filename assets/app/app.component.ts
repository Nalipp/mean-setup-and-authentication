import { Component } from '@angular/core';
import { Message } from './message/message.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  messages: Message[] = [
    new Message('some message', 'nate'),
    new Message('second message', 'max')
    new Message('3rd message', 'ben')
  ];
}
