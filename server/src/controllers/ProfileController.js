const { User } = require('../models')
const { Address } = require('../models')
const { Venue } = require('../models')

module.exports = {
  async updateProfile (req, res) {
    try {
      const user = await User.findOne({
        where: {
          username: req.body.username
        }
      })

      if (user) {
        user.update({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          emergencyContactName: req.body.emergencyContactName,
          emergencyNumber: req.body.emergencyNumber
        })

        let venueId = null
        if (user.type === 'Venue Manager') {
          const venue = await Venue.create({})
          venueId = venue.id
        }
        console.log('accepted', venueId)

        if (req.body.location.trim() !== '') {
          const [address, created] = await Address.findOrCreate({
            where: { UserId: user.id },
            defaults: {
              UserId: user.id,
              VenueId: user.type === 'Venue Manager' ? venueId : null,
              location: req.body.location,
              accountType: user.type
            }
          })

          address.location = req.body.location
          await address.save()
          await address.reload()
        }
      }
      res.send(user)
    } catch (error) {
      res.status(400).send({
        error: 'An error occurred updating your profile'
      })
    }
  },
  async updateVenueProfile (req, res) {
    try {
      const user = await User.findOne({
        where: {
          username: req.body.username
        }
      })

      if (user) {
        user.update({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          emergencyContactName: req.body.emergencyContactName,
          emergencyNumber: req.body.emergencyNumber
        })

        if (req.body.location.trim() !== '') {
          const [address, created] = await Address.findOrCreate({
            where: { UserId: user.id },
            defaults: {
              UserId: user.id,
              location: req.body.location,
              accountType: user.type
            }
          })

          if (!created) {
            address.location = req.body.location

            await address.save()
            await address.reload()
          }
        }
      }
      res.send(user)
    } catch (error) {
      res.status(400).send({
        error: 'An error occurred updating your profile'
      })
    }
  },
  async profile (req, res) {
    try {
      console.log(req.body)
      const profile = await User.findAll({
        include: [{
          model: Address,
          required: true
        }],
        where: { username: req.body.username }
      })
      res.send(profile)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch your profile'
      })
    }
  },
  async profiles (req, res) {
    try {
      const profile = await User.findAll()
      res.send(profile)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch your profile'
      })
    }
  }
}
