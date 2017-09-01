import graphql from './graphql'

export default (router) => {
  // GraphQL server
  router.use('/graphql', graphql)
}

