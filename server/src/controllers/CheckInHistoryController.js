const {CheckInHistory} = require('../models')

module.exports =  {
    async addCheckInHistory (req, res) {
        try {
            const checkInHistory = await CheckInHistory.create(req.body)
            res.send(JSON.stringify(checkInHistory))
        } catch(err) {
            console.log(err)
            res.status(400).send({
                error: err
            })
        }
    },

    async getCheckInHistory (req, res) {
        try {
            console.log(req.body.id)
            const checkInHistory = await CheckInHistory.findOne({where: {id: req.body.id}})
            res.send(JSON.stringify(checkInHistory))
        } catch (err) {
            res.status(400).send({
                error: err
            })
        }
    },

    async getCheckInHistories (req, res) {
        try {
            const checkInHistory = await CheckInHistory.findAll()
            res.send(checkInHistory)
        }catch(err) {
            res.status(400).send({
                error: err
            })
        }
    }
}
