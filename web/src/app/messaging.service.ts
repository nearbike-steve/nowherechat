import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const sendMessage = gql`
  mutation sendMessage($input: MessageInput!) {
    sendMessage(input: $input) {
      room
      user
      message
      sentAt
    }
  }
`;

const messageSent = gql`
  subscription messageSent($room: String!) {
    messageSent(room: $room) {
      room
      user
      message
      sentAt
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  constructor(private apollo: Apollo) {}

  public sendMessage(user: string, room: string, message: string) {
    this.apollo
      .mutate({
        mutation: sendMessage,
        variables: {
          input: {
            user,
            room,
            message
          }
        }
      })
      .subscribe(
        ({ data }) => {
          console.log('got data', data);
        },
        error => {
          console.log('there was an error sending the query', error);
        }
      );
  }
}
