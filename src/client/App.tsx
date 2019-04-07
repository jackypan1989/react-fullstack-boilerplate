import React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo-hooks'
import Posts from './Posts'

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://localhost:3000/graphql'
    })
  ])
  ,cache: new InMemoryCache()
})

const App = () => 
  <ApolloProvider client={client}>
    <Posts />
  </ApolloProvider>

export default App