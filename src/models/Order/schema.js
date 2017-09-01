
export default `
type Order {
  id: Int!
  price: Int
  vehicle: Vehicle
}

type Query {
  orders: [Order]
}
`
