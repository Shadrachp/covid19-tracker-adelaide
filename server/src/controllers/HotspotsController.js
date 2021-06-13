const {Hotspot} = require('../models')
const {Venue} = require('../models')


module.exports =  {
    async addHotspot (req, res) {
        try {
            console.log(req.body)
            const hotspot = await Hotspot.create(req.body)
            console.log(hotspot)
            res.send(JSON.stringify(hotspot))
        } catch(err) {
            console.log(err)
            res.status(400).send({
                error: 'An error has occured trying to create a hotspot'
            })
        }
    },

    async getHotspot (req, res) {
        try {
            console.log(req.body.id)
            const hotspot = await Hotspot.findOne({where: {id: req.body.id}})
            res.send(JSON.stringify(hotspot))
        } catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to fetch a hotspot'
            })
        }
    },

    async getHotspots (req, res) {
        try {
            const hotspot = await Venue.findAll({
                include: [{
                    model: Hotspot,
                    required: true,
                }]
            })
            res.send(hotspot)
        }catch(err) {
            res.status(400).send({
                error: 'An error has occured trying to fetch the hotspots'
            })
        }
    }
}
