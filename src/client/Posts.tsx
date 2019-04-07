import React from 'react'
import { map } from 'ramda'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import { Card } from 'antd'

const GET_POSTS = gql`
  {
    posts {
      id
      title
      content
    }
  }
`

const Posts = (props) => {
  const { data, loading, error } = useQuery(GET_POSTS)
  const { posts } = data

  if (loading) return <div>Loading...</div>

  return <div style={{ background: '#ECECEC', padding: '16px', display: 'flex' }}>
    {map(post =>
      <Card title={post.title} bordered={false} style={{ width: 300, margin: '16px' }}>
        <p>{post.content}</p>
      </Card>
    , posts)}
  </div>
}

export default Posts