const { Address } = require('../models')

module.exports = {
  async addAddress (req, res) {
    try {
      const address = await Address.create(req.body)
      console.log(address)
      res.send(JSON.stringify(address))
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: err
      })
    }
  },

  async getAddress (req, res) {
    try {
      const address = await Address.findOne({ where: { id: req.body.id } })
      res.send(JSON.stringify(address))
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },

  async getAddresses (req, res) {
    try {
      const address = await Address.findAll()
      res.send(address)
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }
}
