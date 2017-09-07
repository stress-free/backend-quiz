export default (validators, input) => {
  if (validators.length === 0) return
  let errors = [];
  validators.forEach( fn => {
    const err = fn(input)
    err && errors.push(JSON.stringify(err))
  })
  if (errors.length) {
    throw new Error(errors.join())
  }
}