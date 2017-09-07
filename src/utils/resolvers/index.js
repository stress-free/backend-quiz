import db from '../../db'
import validate from '../validator'

export const Resolvers = {
  Query: {
    list: (Model) => (unusedFirstParameter, args, context) => {
      return db.get(Model.name) // we can use this Query to get single data or list of data, just put into args options(id, name ...etc) 
    },
    item: (Model) => (unusedFirstParameter, { id }, context) => {
      return db.get(Model.name).filter(m => m.id === id)[0] // change it for real DB(can use sequelize or knex)
    },
  },
  Mutation: {
    delete: (Model) => (unusedFirstParameter, args) => {
      const { input, } = args
      db.delete(Model.name, input)
      return {
        id: input.id,
      }
    },
    createAndUpdate: (Model, validators) => async (unusedFirstParameter, { input }) => {
      validators && validate(validators, input)
      const { id } = await db.set(Model.name, input)
      return { id }
    }
  }
}
