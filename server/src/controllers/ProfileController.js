const {User} = require('../models')
const {Address} = require('../models')

module.exports = {
    async updateProfile (req, res) {
        try {
            console.log('accepted')
            const user = await User.findOne({
                where: {
                    username: req.body.username
                }
            })

            if(user) {
                user.update({
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    phone: req.body.phone,
                    emergencyContactName: req.body.emergencyContactName,
                    emergencyNumber: req.body.emergencyNumber
                })

                if(req.body.location.trim() !== '') {
                    const [address, created] = await Address.findOrCreate({
                        where: { UserId: user.id },
                        defaults: {
                            UserId: user.id,
                            location: req.body.location,
                            accountType: user.type
                        }
                    })

                    if(!created) {
                        address.location = req.body.location

                        await address.save()
                        await address.reload()
                    }
                    res.send(address)
                }


            }
            // res.send(user)
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
                    required: true,
                }],
                where: {username : req.body.username},
            })
            res.send(profile)
        } catch(err) {
            res.status(400).send({
                error: 'An error has occured trying to fetch your profile'
            })
        }
    },
    async profiles (req, res) {
        try {
            const profile = await User.findAll()
            res.send(profile)
        }catch(err) {
            res.status(400).send({
                error: 'An error has occured trying to fetch your profile'
            })
        }
    }
}
