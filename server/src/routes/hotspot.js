const HotspotsController = require('../controllers/HotspotsController')

module.exports = (router) => {
  router.post('/hotspot',
    HotspotsController.addHotspot)
  router.get('/hotspot', HotspotsController.getHotspot)
  router.get('/hotspots', HotspotsController.getHotspots)
}
