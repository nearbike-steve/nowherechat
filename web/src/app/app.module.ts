import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessengerMainComponent } from './messenger-main/messenger-main.component';
import { MessengerUpdateComponent } from './messenger-update/messenger-update.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MessengerSendComponent } from './messenger-send/messenger-send.component';
import { MessengerUserRoomComponent } from './messenger-user-room/messenger-user-room.component';
import { MessengerMessageComponent } from './messenger-message/messenger-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessengerMainComponent,
    MessengerUpdateComponent,
    MessengerSendComponent,
    MessengerUserRoomComponent,
    MessengerMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MessengerUpdateComponent]
})
export class AppModule {}
