
export default `
type User {
  id: Int!
  firstName: String
  lastName: String
  # Defined as first name and last initial, e.g. Evan R
  displayName: String @virtual
  email: String
  vehicles: [Vehicle]
}

type ProfitableUsers {
  user: User
  spend: Int
}

type Query {
  # Return List of user
  users: [User]
  # Return existed user by userId
  user(id: Int!): User
  # Returns a sorted list of users according to the total value of their orders
  profitableUsers(top: Int!): [ProfitableUsers]
}

type Mutation {
  # Delete user by userId
  deleteUser(input: DeleteUserInput!): DeleteUserPayload
}

input DeleteUserInput {
  id: Int!
}

type DeleteUserPayload {
  id: Int!
  error: String
}`
