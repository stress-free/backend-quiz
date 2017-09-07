
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
  id: Int
}

type Query {
  # Return list of vehicles
  vehicles: [Vehicle]
  # Return vehicle by id
  vehicle(id: Int!): Vehicle
}

type UpdatedVehiclesPayload {
  id: Int!
}

type Mutation {
  # Create new vehicle
  createVehicle(input: VehicleInput!): UpdatedVehiclesPayload
  # Update existed vehicle
  updateVehicle(input: VehicleInput!): UpdatedVehiclesPayload
}

`
