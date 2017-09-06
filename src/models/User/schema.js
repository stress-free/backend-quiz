
export default `
type User {
  id: Int!
  firstName: String
  lastName: String
  fullName: String @virtual
  email: String
  vehicles: [Vehicle]
}

type ProfitableUsers {
  user: User
  spend: Int
}

type Query {
  users: [User]
  user(id: Int!): User
  profitableUsers(top: Int!): [ProfitableUsers]
}

type Mutation {
  deleteUser(input: DeleteUserInput!): DeleteUserPayload
}

input DeleteUserInput {
  id: Int!
}

type DeleteUserPayload {
  id: Int!
  error: String
}`
