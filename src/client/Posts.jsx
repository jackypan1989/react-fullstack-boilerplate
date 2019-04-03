import React from 'react'
import { map } from 'ramda'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'

const GET_POSTS = gql`
  {
    posts {
      id
      title
    }
  }
`

const Posts = () => {
  const { data, loading, error } = useQuery(GET_POSTS)
  const { posts } = data

  if (loading) return 'Loading...'

  return <div>
    {map(post => 
      <div>
        id: {post.id}
        title: {post.title}
        content: {post.content}
      </div>
    , posts)}
  </div>
}

export default Posts