const VaccineController = require('../controllers/VaccineController')
// const VaccineControllerPolicy = require('../policies/VaccineControllerPolicy')

module.exports = (router) => {
  router.post('/vaccine',
    VaccineController.addVaccine)
  router.get('/vaccine', VaccineController.getVaccine)
  router.get('/vaccines', VaccineController.getVaccines)
}
