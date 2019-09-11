import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/messaging.service';

@Component({
  selector: 'app-messenger-update',
  templateUrl: './messenger-update.component.html',
  styleUrls: ['./messenger-update.component.scss']
})
export class MessengerUpdateComponent implements OnInit {
  public userUpdate = '';
  public roomUpdate = '';

  constructor(private messagingService: MessagingService) {}

  ngOnInit() {}

  public changeRoom() {
    this.messagingService.changeRoom(this.roomUpdate);
    this.roomUpdate = '';
  }

  public changeUser() {
    this.messagingService.changeUser(this.userUpdate);
    this.userUpdate = '';
  }
}
