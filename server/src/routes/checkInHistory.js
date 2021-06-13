const CheckInHistoryController = require('../controllers/CheckInHistoryController')
// const CheckInHistoryControllerPolicy = require('../policies/CheckInHistoryControllerPolicy')

module.exports = (router) => {
  router.post('/checkInHistory',
    CheckInHistoryController.addCheckInHistory)
  router.get('/checkInHistory', CheckInHistoryController.getCheckInHistory)
  router.post('/userCheckInHistories', CheckInHistoryController.getUserCheckInHistories)
  router.post('/venueCheckInHistories', CheckInHistoryController.getVenueCheckInHistories)
}
