
export default `
type Vehicle {
  id: Int!
  model: String
  make: String
  year: Int
}

input VehicleInput {
  model: String
  make: String
  year: Int
}

type Query {
  vehicles: [Vehicle]
  vehicle(id: Int!): Vehicle
}

type UpdatedVehiclesPayload {
  id: Int!
}

type Mutation {
  createVehicle(input: VehicleInput!): UpdatedVehiclesPayload
  updateVehicle(input: VehicleInput!): UpdatedVehiclesPayload
}

`
