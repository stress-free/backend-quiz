import Model from './model'
import { Resolvers, getCommonSpend, } from '../../utils'
import db from '../../db'
export default {
  Query: {
    users: Resolvers.Query.list(Model),
    user: Resolvers.Query.item(Model),
    profitableUsers: (obj, { top = 10 }) => getCommonSpend(db).sort((a,b) => b.spend - a.spend ).slice(0,top),
  },
  Mutation: {
    deleteUser: Resolvers.Mutation.delete(Model),
  },
  User: {
    vehicles: (obj, args, context) => {
      return db.get('Vehicle').filter(vehicle => vehicle.userId === obj.id)
    },
    displayName: obj => `${obj.firstName} ${obj.lastName[0]}.`,
  },
}
