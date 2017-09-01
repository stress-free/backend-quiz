import Model from './model'
import { Resolvers, } from '../../utils'
export default {
  Query: {
    orders: Resolvers.Query.list(Model)
  },
}
