const HospitalController = require('../controllers/HospitalController')
const HospitalControllerPolicy = require('../policies/HospitalControllerPolicy')

module.exports = (router) => {
    router.post('/hospital',
        HospitalController.addHospital,
        HospitalControllerPolicy.addHospital)
    router.get('/hospital', HospitalController.getHospital)
    router.get('/hospitals', HospitalController.getHospitals)
}
