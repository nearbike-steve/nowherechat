import { Injectable } from '@angular/core';
import { GraphQLService, IMessage } from './graphql.service';
import { Subscription } from 'apollo-client/util/Observable';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  public room = 'Public';
  public user = 'SteveBob';
  public messages: IMessage[] = [];
  public messagesSubscription: Subscription;

  constructor(private graphql: GraphQLService) {
    this.subscribeToMessages();
  }

  public async sendMessage(message: string) {
    if (!message) {
      alert('Please enter a message');
      return;
    }

    try {
      this.graphql.sendMessage(this.room, this.user, message);
    } catch (error) {
      console.log(error);
    }
  }

  public changeRoom(room: string) {
    if (!room) {
      alert('Invalid room');
      return;
    }

    this.room = room;
    this.clearMessage();
    this.subscribeToMessages();
  }

  public changeUser(user: string) {
    if (!user) {
      alert('Invalid user');
      return;
    }

    this.user = user;
  }

  private clearMessage() {
    this.messages = [];
  }

  private subscribeToMessages() {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }

    this.messagesSubscription = this.graphql
      .messageSent(this.room)
      .subscribe(result => this.messages.push(result.data.messageSent));
  }
}
