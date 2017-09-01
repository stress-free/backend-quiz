import express from 'express'
import bodyParser from 'body-parser'
import util from 'util'
import _ from 'lodash'
import pluralize from 'pluralize'

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'

import schema from '../../schema'

const api = express()

api.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  query: `{
  feed (type: NEW, limit: 5) {
    repository {
      owner { login }
      name
    }
    postedBy { login }
  }
}
`,
}));

api.use('/', graphqlExpress((request, response, graphQLParams) => {
  return {
    schema,
    rootValue: null,
    context: null,
  }
}))

export default api
