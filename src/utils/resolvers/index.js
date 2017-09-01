import db from '../../db'

export const Resolvers = {
  Query: {
    list: (Model) => (unusedFirstParameter, args, context) => {
      return db.get(Model.name)
    },
  },
  Mutation: {
    delete: (Model) => (unusedFirstParameter, args) => {
      const { input, } = args
      db.delete(Model.name, input)
      return {
        id: input.id,
      }
    }
  }
}
