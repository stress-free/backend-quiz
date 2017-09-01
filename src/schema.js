
import * as Models from './models'
import { makeExecutableSchema, } from 'graphql-tools'
import { mergeResolvers, mergeTypes, } from 'merge-graphql-schemas'

const typeDefs = mergeTypes(
  Object.keys(Models).map(m => Models[m].schema)
)

const resolvers = mergeResolvers(
  Object.keys(Models).map(m => Models[m].resolvers)
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
