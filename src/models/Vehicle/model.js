import BaseModel from '../BaseModel'


export default class Vehicle extends BaseModel {

  static async isValidConfiguration(params) {
    const results = await vehicleSearch({
      vehicleId: params.vehicleId,
      engineConfigId: params.engineConfigId,
      transmissionControlTypeId: params.transmissionControlTypeId,
    })
    return results.length > 0
  }
}
