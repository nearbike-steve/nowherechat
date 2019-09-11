import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NowhereChatWeb';

  constructor(private messagingService: MessagingService) {}

  public async ngOnInit() {
    this.messagingService.sendMessage('SteveBob', 'Public', 'Hello World!');
  }
}
