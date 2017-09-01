import {
  graphql
} from 'graphql'

let Schema = null
describe('Tests that already pass', () => {
  beforeEach(() => {
    Schema = require('../src/schema').default
  })

  test('Query all users', async () => {
    const query = `
    {
      users {
        id
      }
    }`
    const { data, errors, } = await graphql(Schema, query, null, null)
    expect(data.users.length).toEqual(10)
  });

  test('Delete user', async () => {
    const query = `
    mutation {
      deleteUser(input: {id: 1}) {
        id
      }
    }`
    const result = await graphql(Schema, query, null, null)
    expect(result.data.deleteUser.id).toEqual(1)
    const allUsersQuery = `
    {
      users {
        id
      }
    }`
    
    const result2 = await graphql(Schema, allUsersQuery, null, null)
    expect(result2.data.users.length).toEqual(9)
  })

})

describe('Tests for applicant to make pass', () => {
  beforeEach(() => {
    Schema = require('../src/schema').default
  })

  test('Part 1: query user by id', async () => {
    const query = `
    {
      user(id: 7) {
        id
        firstName
        lastName
      }
    }`
    const expected = {
      id: 7,
      firstName: 'Geoffrey',
      lastName: 'McClure'
    }
    const { data, errors, } = await graphql(Schema, query, null, null)
    expect(data.user).toEqual(expected)
  });

  test('Part 2: user displayName', async () => {
    const query = `
    {
      user(id: 7) {
        id
        firstName
        lastName
        displayName
      }
    }`
    const expected = {
      id: 7,
      firstName: 'Geoffrey',
      lastName: 'McClure',
      displayName: 'Geoffrey M.',
    }
    const { data, errors, } = await graphql(Schema, query, null, null)
    expect(data.user).toEqual(expected)
  })

  test('Part 3: profitable users query', async () => {
    const query = `
    {
      profitableUsers(top: 7){
        spend
        user {
          id
          firstName
          lastName
        }
      }
    }`
    const expected = {
      spend: 333724,
      user: {
        id: 8,
        firstName: 'Bill',
        lastName: 'Satterfield'
      },
    }
    const { data, errors, } = await graphql(Schema, query, null, null)
    expect(data.profitableUsers[1]).toEqual(expected)
    expect(data.profitableUsers.length).toEqual(7)
  })

  describe('Part 4: createVehicle mutation', () => {
    beforeEach(() => {
      Schema = require('../src/schema').default
    })
    test('a) throws out bad (make, model) pairs', async () => {
      const query = `
      mutation {
        createVehicle(input:{
          year:2015
          make:"BMW"
          model:"GrandCherokee"
        }) {
          vehicle{
            id
          }
        }
      }`
      const { data, errors, } = await graphql(Schema, query, null, null)
      expect(errors.length).toEqual(1)
      expect(data).toEqual({ createVehicle: null, })
    })
    test('b) correctly saves valid models', async () => {
      const query = `
      mutation {
        createVehicle(input:{
          year:2015
          make:"Acura"
          model:"MDX"
        }) {
          vehicle{
            id
            year
            make
            model
          }
        }
      }`
      const { data, errors, } = await graphql(Schema, query, null, null)
      expect(errors).toEqual(undefined)
      expect(data.createVehicle).toEqual({ vehicle: {
        id: 21,
        year: 2015,
        make: 'Acura',
        model: 'MDX',
      }})
    })
  })

  describe('Part 5: updateVehicle mutation', () => {
    beforeEach(() => {
      Schema = require('../src/schema').default
    })
    test('a) throws out bad (make, model) pairs', async () => {
      const query = `
      mutation {
        updateVehicle(input:{
          id: 5
          year:2015
          make:"BMW"
          model:"GrandCherokee"
        }) {
          vehicle{
            id
          }
        }
      }`
      const { data, errors, } = await graphql(Schema, query, null, null)
      expect(errors.length).toEqual(1)
      expect(data).toEqual({ updateVehicle: null, })
    })
    test('b) correctly saves valid models', async () => {
      const query = `
      mutation {
        updateVehicle(input:{
          id: 5
          make:"Honda"
          model:"Accord"
        }) {
          vehicle{
            id
            year
            make
            model
          }
        }
      }`
      const expected = {
        id: 5,
        year: 2009,
        make: 'Honda',
        model: 'Accord',
      }
      const { data, errors, } = await graphql(Schema, query, null, null)
      expect(errors).toEqual(undefined)
      expect(data.updateVehicle.vehicle).toEqual(expected)
      const vehiclesQuery = `{
       vehicles {
         id
         year
         make
         model
       } 
      }`
      const result2 = await graphql(Schema, vehiclesQuery, null, null)
      expect(result2.data.vehicles[4]).toEqual(expected)
    })
  })

})