const posts = [
  {
    id: 1,
    author: 'Jacky',
    title: 'Graphql Tutorial',
    content: 'I like graphql so much.'
  },
  {
    id: 2,
    author: 'Jason',
    title: 'Parcel Book',
    content: 'Parcel is so fast.'
  },
  {
    id: 3,
    author: 'Larry',
    title: 'Antd Design',
    content: 'Antd is good.'
  }
]

export default {
  Query: {
    posts: (parent: any, variable: any) => {
      return posts
    },
    post: (parent: any, variable: any) => {
      const { id } = variable
      return posts[0]
    }
  }
}