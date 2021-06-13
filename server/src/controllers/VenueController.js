const { Venue } = require('../models')

module.exports = {
  async addVenue (req, res) {
    try {
      const venue = await Venue.create(req.body)
      console.log(venue)
      res.send(JSON.stringify(venue))
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error has occured trying to create a venue'
      })
    }
  },

  async getVenue (req, res) {
    try {
      console.log(req.body.id)
      const venue = await Venue.findOne({ where: { id: req.body.id } })
      res.send(JSON.stringify(venue))
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch a venue'
      })
    }
  },

  async getVenues (req, res) {
    try {
      const venue = await Venue.findAll()
      res.send(venue)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch the venues'
      })
    }
  }
}
