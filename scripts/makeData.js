const faker = require('faker')
const fs = require('fs')
const util = require('util')
const path = require('path')

const rand = arr => arr[Math.floor(Math.random() * (arr.length))]
const a = num => Array(num).fill(0)
const b = num => Array(num).fill(0).map((a, idx) => idx)

const years = b(10).map(a => a + 2005)
const makes = {
  Acura: ['MDX', 'RDX', 'ILX'],
  Audi: ['A4', 'Q5', 'Q7'],
  BMW: ['325', '750'],
  Ford: ['Taurus', 'F150'],
  Honda: ['CR-V', 'Accord'],
  Jaguar: ['XJ', 'XF', 'XE'],
  Jeep: ['Grand Cherokee'],
  Toyota: ['RAV4', 'Corolla', 'Camry'],
}

const User = a(10).map((a, idx) => ({
  id: idx + 1,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
}))

const Vehicle = a(20).map((a, idx) => {
  const make = rand(Object.keys(makes))
  const model = rand(makes[make])
  return {
    id: idx + 1,
    userId: rand(b(10)),
    make,
    year: rand(years),
    model,
  }
})

const data = {
  User,
  Vehicle,
  Order: a(30).map((a, idx) => {
    const vehicle = rand(Vehicle)
    return {
      id: idx + 1,
      vehicleId: vehicle.id,
      price: Math.floor(2000 + Math.random() * 100000)
    }
  })
}

fs.writeFileSync(path.resolve(__dirname, `../src/data.js`), util.inspect(data, false, null))

