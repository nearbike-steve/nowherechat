import { Component } from '@angular/core';
import { MessagingService } from '../messaging.service';
import { MatDialog } from '@angular/material/dialog';
import { MessengerUpdateComponent } from '../messenger-update/messenger-update.component';

@Component({
  selector: 'messenger-user-room',
  templateUrl: './messenger-user-room.component.html',
  styleUrls: ['./messenger-user-room.component.scss']
})
export class MessengerUserRoomComponent {
  public get user(): string {
    return this.messagingService.user;
  }
  public get room(): string {
    return this.messagingService.room;
  }

  constructor(private messagingService: MessagingService, public dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(MessengerUpdateComponent, {
      width: '400px'
    });
  }
}
