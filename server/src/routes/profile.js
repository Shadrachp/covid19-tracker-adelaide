const ProfileController = require('../controllers/ProfileController')

module.exports = (router) => {
    router.post('/updateProfile',
        ProfileController.updateProfile)
    router.post('/profile',
        ProfileController.profile)
    router.get('/profiles', ProfileController.profiles)
}
