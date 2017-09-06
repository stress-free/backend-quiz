import db from '../../db'
import Model from './model'
import { Resolvers, } from '../../utils'
import { validateMakes, } from './validators'

export default {
  Query: {
    vehicles: Resolvers.Query.list(Model),
    vehicle: Resolvers.Query.item(Model),
  },
  Mutation: {
    createVehicle: Resolvers.Mutation.createAndUpdate(Model, [validateMakes]),
    updateVehicle: Resolvers.Mutation.createAndUpdate(Model, [validateMakes]),
  },
}
