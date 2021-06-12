const AddressController = require('../controllers/AddressController')
// const AddressControllerPolicy = require('../policies/AddressControllerPolicy')

module.exports = (router) => {
    router.post('/address',
        AddressController.addAddress)
    router.get('/address', AddressController.getAddress)
    router.get('/addresses', AddressController.getAddresses)
}
