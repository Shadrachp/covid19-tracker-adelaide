const { Hospital } = require('../models')

module.exports = {
  async addHospital (req, res) {
    try {
      const hospital = await Hospital.create(req.body)
      console.log(hospital)
      res.send(JSON.stringify(hospital))
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: err
      })
    }
  },

  async getHospital (req, res) {
    try {
      console.log(req.body.id)
      const hospital = await Hospital.findOne({ where: { id: req.body.id } })
      res.send(JSON.stringify(hospital))
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async getHospitals (req, res) {
    try {
      const hospital = await Hospital.findAll()
      res.send(hospital)
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }
}
