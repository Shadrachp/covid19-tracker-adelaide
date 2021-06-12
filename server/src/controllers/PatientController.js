const {Patient} = require('../models')

module.exports =  {
    async addPatient (req, res) {
        try {
            const patient = await Patient.create(req.body)
            console.log(patient)
            res.send(JSON.stringify(patient))
        } catch(err) {
            console.log(err)
            res.status(400).send({
                error: err
            })
        }
    },

    async getPatient (req, res) {
        try {
            console.log(req.body.id)
            const patient = await Patient.findOne({where: {id: req.body.id}})
            res.send(JSON.stringify(patient))
        } catch (err) {
            res.status(400).send({
                error: err
            })
        }
    },

    async getPatients (req, res) {
        try {
            const patient = await Patient.findAll()
            res.send(patient)
        }catch(err) {
            res.status(400).send({
                error: err
            })
        }
    }
}
