import db from '../db'

export default class BaseModel {
  constructor(args) {
    Object.keys(args).forEach((key) => {
      this[key] = args[key]
    })
  }

  save() {
    if (!this.id) {
      const numEntries = db.get(this.constructor.name).length + 1
      this.id = numEntries
    }
    db.set(this.constructor.name, this)
  }
}