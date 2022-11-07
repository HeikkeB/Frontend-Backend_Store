const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
const TypeController = require('../controllers/typeController')

router.post('/', TypeController.create)
router.get('/', TypeController.getAll)
router.delete('/')

module.exports = router
