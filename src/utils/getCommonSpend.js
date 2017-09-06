 // this is a nightmare, but when will be real DB it is more readable
export default (db) =>
  db.get('User').map(user => ({
    user,
    spend: db.get('Vehicle')
                .filter(el => el.userId === user.id)
                .reduce((result, item) => {
                  const orders = db.get('Order').filter(ord => ord.vehicleId === item.id)
                  const summ = orders.reduce((res, { price }) => (res + price), 0)
                  return result + summ
                }, 0),
  }))