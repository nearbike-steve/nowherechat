import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MessengerMainComponent } from './messenger-main/messenger-main.component';
import { MessengerUpdateComponent } from './messenger-update/messenger-update.component';

@NgModule({
  declarations: [MessengerMainComponent, MessengerUpdateComponent],
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule],
  exports: [MessengerMainComponent],
  entryComponents: [MessengerUpdateComponent]
})
export class MessengerModule {}
