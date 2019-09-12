import { Component, Input } from '@angular/core';
import { IMessage } from '../graphql.service';

@Component({
  selector: 'messenger-message',
  templateUrl: './messenger-message.component.html',
  styleUrls: ['./messenger-message.component.scss']
})
export class MessengerMessageComponent {
  @Input() public message: IMessage;

  constructor() {}
}
