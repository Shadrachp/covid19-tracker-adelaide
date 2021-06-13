const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const phoneRegex = new RegExp('^[0-9]{8,16}$')
    const nameRegex = new RegExp('^[ a-zA-Z]+$')
    const passwordRegex = new RegExp('^[a-zA-Z0-9]{7,32}$')
    const schema = Joi.object({
      name: Joi.string().regex(nameRegex).required(),
      username: Joi.string().required(),
      phoneNumber: Joi.string().regex(phoneRegex).required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(passwordRegex).required()
    })
    const temp = {
      name: req.body.name,
      username: req.body.username,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password
    }

    const { error, value } = schema.validate(temp)
    if (temp.password !== req.body.rePassword) {
      res.status(400).send({
        error: 'Password Mismatch!'
      })
    } else if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'Name can only contain letters'
          })
          break
        case 'phoneNumber':
          // case 'emergencyNumber':
          res.status(400).send({
            error: 'Please provide a valid phone number'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `Password must be at least 8 characters and not greater than 32 characters
                                and it must contain lowercase, uppercase, and numerics.
                            `
          })
          break
        default:
          res.status(400).send({
            // error: 'Invalid registration information'
            error: error
          })
      }
    } else {
      next()
    }
  }
}
