import { Component } from '@angular/core';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'messenger-send',
  templateUrl: './messenger-send.component.html',
  styleUrls: ['./messenger-send.component.scss']
})
export class MessengerSendComponent {
  public message = '';

  constructor(private messagingService: MessagingService) {}

  public async sendMessage() {
    this.messagingService.sendMessage(this.message);
    this.message = '';
  }
}
