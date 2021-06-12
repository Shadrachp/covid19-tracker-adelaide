const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')

module.exports = (router) => {
    require('./hospital')(router)
    require('./address')(router)
    require('./checkInHistory')(router)
    // require('./hotspot')(router)
    require('./patients')(router)
    require('./vaccine')(router)

    router.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    router.post('/login',
        AuthenticationController.login)
}
