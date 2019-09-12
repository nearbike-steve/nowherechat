import { Component } from '@angular/core';
import { IMessage } from 'src/app/graphql.service';
import { MessagingService } from 'src/app/messaging.service';

@Component({
  selector: 'messenger-main',
  templateUrl: './messenger-main.component.html',
  styleUrls: ['./messenger-main.component.scss']
})
export class MessengerMainComponent {
  public get messages(): IMessage[] {
    return this.messagingService.messages;
  }

  constructor(private messagingService: MessagingService) {}
}
