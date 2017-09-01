# CarDash Backend Quiz

This is a  basic quiz to to assess your familiarity with the technology stack we're using. If you are familiar with the tech stack, this should only take 30-45 minutes of your time. If not familiar, it could take longer.

To get started, clone this repository.

To get the app running, `npm i` and run `npm run dev`.

To test your work, run `npm run test`

## The Tasks

1. Create a new query to fetch an individual user by id
```graphql
{
  user(id: 5) {
    firstName
  }
}
```

Bonus points for generalizing this to work across all of the models

2. Create a new GraphQL property on `User` called `displayName`, which is defined as first name and last initial, e.g. `Evan R.`

3. Create a new query `profitableUsers` which returns a sorted list of users according to the total value of their orders.
```graphql
{
  profitableUsers(top: 5) {
    user {
      firstName
      lastName
    }
    spend
  }
}
```

4. Create a new GraphQL mutation `createVehicle` that accepts parameters `year`, `make`, and `model`. This mutation throws an error if the (`make`, `model`) pair is not valid. You will want to fill out the function `set` in db.js, and you can find the list of valid pairs below.

5. Create a new GraphQL mutation `updateVehicle` that accepts parameters `id`, `year`, `make`, and `model`. This mutation throws an error if the (`make`, `model`) pair is not valid. Otherwise it updates and saves the appropriate model. You will want to fill out the function `set` in db.js, and you can find the list of valid pairs below.

## Valid pairs

```javascript
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
```
