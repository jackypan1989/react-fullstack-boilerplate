import { gql } from 'apollo-server'

export default gql`
  type Post {
    id: ID
    author: String
    title: String
    content: String
  }

  input PostInput {
    author: String
    title: String
    content: String
  }

  type Query {
    posts: [Post]
    post(id: ID): Post
  }
`

