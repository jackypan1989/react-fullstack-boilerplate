export default {
  Query: {
    posts: (parent: any, variable: any) => {
      return [{
        id: 123,
        author: 'jacky',
        title: 'abc',
        content: 'hello'
      }]
    },
    post: (parent: any, variable: any) => {
      const { id } = variable
      return {
        id: 123,
        author: 'jacky',
        title: 'abc',
        content: 'hello'
      }
    }
  }
}