const PatientController = require('../controllers/PatientController')
// const PatientControllerPolicy = require('../policies/PatientControllerPolicy')

module.exports = (router) => {
    router.post('/patient',
        PatientController.addPatient)
    router.get('/patient', PatientController.getPatient)
    router.get('/patients', PatientController.getPatients)
}
