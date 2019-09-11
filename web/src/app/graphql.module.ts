import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

const uri = 'https://w6ehjyw2zffilkdw5eg6lzjiya.appsync-api.us-east-1.amazonaws.com/graphql';
const apiKey = 'da2-6bueh53bjrecpjlp4flgzr53hu';

export function createApollo(httpLink: HttpLink) {
  const http = httpLink.create({ uri });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({ headers: { 'x-api-key': apiKey } });
    return forward(operation);
  });

  return {
    link: authLink.concat(http),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
