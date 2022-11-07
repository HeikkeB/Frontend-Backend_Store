const Router = require('express')
const deviceController = require('../controllers/deviceController')
const router = new Router()
const DeviceController = require('../controllers/deviceController')

router.get('/', DeviceController.create)
router.get('/:id', DeviceController.getOne)
router.post('/', DeviceController.getAll)

module.exports = router
