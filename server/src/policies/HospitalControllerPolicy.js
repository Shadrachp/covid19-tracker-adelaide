const Joi = require('joi')

module.exports = {
    addHospital (req, res, next) {

        const schema = Joi.object({
            patientsId: Joi.integer().required(),
            vaccineId: Joi.integer().required(), 
            newCase: Joi.integer(),
            case: Joi.integer(),
            recovered: Joi.integer(),
            address: Joi.string().required()
        })
        let temp = {
            patientsId: req.body.patientsId,
            vaccineId: req.body.vaccineId,
            newCase: req.body.newCase,
            case: req.body.case,
            recovered: req.body.recovered,
            address: req.body.address
        }



        const {error, value} = schema.validate(temp)
        if (error) {
            switch(error.details[0].context.key) {
                case 'address':
                    res.status(400).send({
                        error: 'Please input a valid address'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Please fill up missing values'
                    })
            }
        } else {
            next()
        }
    }
}
