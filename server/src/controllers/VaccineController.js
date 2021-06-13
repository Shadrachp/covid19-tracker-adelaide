const { Vaccine } = require('../models')

module.exports = {
  async addVaccine (req, res) {
    try {
      const vaccine = await Vaccine.create(req.body)
      console.log(vaccine)
      res.send(JSON.stringify(vaccine))
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: err
      })
    }
  },

  async getVaccine (req, res) {
    try {
      console.log(req.body.id)
      const vaccine = await Vaccine.findOne({ where: { id: req.body.id } })
      res.send(JSON.stringify(vaccine))
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async getVaccines (req, res) {
    try {
      const vaccine = await Vaccine.findAll()
      res.send(vaccine)
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }
}
