import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

import typeDefs from './graphql/schema'
import resolvers from './graphql/resolver'

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.use(express.static('dist'))
app.listen(3000, () => {
  console.log('Server Listening on port http://localhost:3000')
  console.log('Graphql Listening on port http://localhost:3000/graphql')
})