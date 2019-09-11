import { Injectable } from '@angular/core';
import AWSAppSyncClient, { AWSAppSyncClientOptions } from 'aws-appsync';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { environment } from 'src/environments/environment';

export interface IMessage {
  room: string;
  user: string;
  message: string;
  sentAt: string;
  __typename: string;
}

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

interface ISendMessage {
  data: {
    sendMessage: IMessage;
  };
}

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

interface IMessageSent {
  data: {
    messageSent: IMessage;
  };
}

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {
  private client: AWSAppSyncClient<NormalizedCacheObject>;

  constructor() {
    this.client = new AWSAppSyncClient(environment.appsyncConfig as AWSAppSyncClientOptions);
  }

  public sendMessage(room: string, user: string, message: string) {
    return this.client.mutate<ISendMessage>({ mutation: sendMessage, variables: { input: { room, user, message } } });
  }

  public messageSent(room: string) {
    return this.client.subscribe<IMessageSent>({ query: messageSent, variables: { room } });
  }
}
