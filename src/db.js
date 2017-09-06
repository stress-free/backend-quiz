import data from './data'

class Database {
  constructor() {
    this.data = data
  }

  get(modelName) {
    const model = require(`./models/${modelName}/model`).default
    return this.data[modelName].map(m => new model(m))
  }
/*
now we dont' save any changes to data.js, just keep it in our virtual DB
*/
  set(modelName, datum) { //in real DB can add some rules to safety updating our data
    const data = this.data[modelName]
    let item = data.filter(obj => obj.id === datum.id)[0];
    if (item) {
      Object.keys(datum).forEach(key => item[key] = datum[key])
    } else {
      item = {
        id: data.length + 1, // should use some library like uuid to generate ID
        ...datum,
      };
      data.push(item)
    }
    return item
  }

  delete(modelName, datum) {
    const data = this.data[modelName]
    this.data[modelName] = data.filter(obj => obj.id !== datum.id)
  }
}

export default new Database()
