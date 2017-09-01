import Model from './model'
import { Resolvers, } from '../../utils'
import db from '../../db'
export default {
  Query: {
    users: Resolvers.Query.list(Model),
  },
  Mutation: {
    deleteUser: Resolvers.Mutation.delete(Model),
  },
  User: {
    vehicles: (obj, args, context) => {
      return db.get('Vehicle').filter(vehicle => vehicle.userId === obj.id)
    },
  },
}
