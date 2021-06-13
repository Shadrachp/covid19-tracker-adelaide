const { CheckInHistory } = require('../models')
const { Venue } = require('../models')
const { Address } = require('../models')
const { User } = require('../models')

module.exports = {
  async addCheckInHistory (req, res) {
    try {
      console.log(req.body)
      const venue = await Venue.findOne({
        where: { id: req.body.checkInCode },
        include: {
          model: Address,
          required: true
        }
      })
      if (!venue) {
        res.send('Invalid check in code')
      }
      const checkIn = req.body
      console.log(venue.Address.location)

      checkIn.address = venue.Address.location
      const checkInHistory = await CheckInHistory.create(req.body)
      res.send(JSON.stringify(checkInHistory))
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'An error occurred while checking in to your venue'
      })
    }
  },

  async getCheckInHistory (req, res) {
    try {
      console.log(req.body.id)
      const checkInHistory = await CheckInHistory.findOne({ where: { id: req.body.id } })
      res.send(JSON.stringify(checkInHistory))
    } catch (err) {
      res.status(400).send({
        error: 'An error occured fetching your check in history'
      })
    }
  },

  async getUserCheckInHistories (req, res) {
    try {
      const user = await User.findOne({
        where: {
          id: req.body.UserId
        },
        include: {
          model: CheckInHistory,
          required: true
        }
      })

      const checkInHistory = user.CheckInHistories
      res.send(JSON.stringify(checkInHistory))
    } catch (err) {
      res.status(400).send({
        error: 'An error occured fetching your check in history'
      })
    }
  },
  async getVenueCheckInHistories (req, res) {
    try {
      const address = await Address.findOne({
        where: {
          UserId: req.body.UserId
        }
      })

      if (!address) {
        res.send("An error occured fectching your venue's check in history")
      }
      const checkInHistory = await CheckInHistory.findAll({
        where: {
          VenueId: address.VenueId
        }
      })

      if (!checkInHistory) {
        res.send("An error occured fectching your venue's check in history")
      }

      res.send(JSON.stringify(checkInHistory))
    } catch (err) {
      res.status(400).send({
        error: 'An error occured fetching your check in history'
      })
    }
  }
}
