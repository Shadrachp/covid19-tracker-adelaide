const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')

module.exports = (router) => {
    require('./hospital')(router)
    require('./address')(router)
    require('./checkInHistory')(router)
    require('./hotspot')(router)
    require('./venue')(router)
    require('./patients')(router)
    require('./vaccine')(router)
    require('./profile')(router)


    router.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    router.post('/login',
        AuthenticationController.login)
}
