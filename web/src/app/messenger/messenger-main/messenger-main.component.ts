import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IMessage } from 'src/app/graphql.service';
import { MessagingService } from 'src/app/messaging.service';
import { MessengerUpdateComponent } from '../messenger-update/messenger-update.component';

@Component({
  selector: 'messenger-main',
  templateUrl: './messenger-main.component.html',
  styleUrls: ['./messenger-main.component.scss']
})
export class MessengerMainComponent {
  public message = '';

  public get user(): string {
    return this.messagingService.user;
  }
  public get room(): string {
    return this.messagingService.room;
  }
  public get messages(): IMessage[] {
    return this.messagingService.messages;
  }

  constructor(private messagingService: MessagingService, public dialog: MatDialog) {}

  public async sendMessage() {
    this.messagingService.sendMessage(this.message);
    this.message = '';
  }

  public openDialog(): void {
    this.dialog.open(MessengerUpdateComponent, {
      width: '400px'
    });
  }
}
