import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

const sendDummyMessage = gql`
  mutation sendMessage($input: MessageInput!) {
    sendMessage(input: $input) {
      room
      user
      message
      sentAt
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NowhereChatWeb';

  constructor(private apollo: Apollo) {}

  public async ngOnInit() {
    this.apollo
      .mutate({
        mutation: sendDummyMessage,
        variables: {
          input: {
            user: 'SteveBob',
            room: 'Public',
            message: 'Hello World!'
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
