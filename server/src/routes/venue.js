const VenueController = require('../controllers/VenueController')

module.exports = (router) => {
  router.post('/venue',
    VenueController.addVenue)
  router.get('/venue', VenueController.getVenue)
  router.get('/venues', VenueController.getVenues)
}
