const Router = require('express')
const router = new Router()

router.use('/brand')
router.use('/type')
router.use('/device')
router.use('/user')

module.exports = router
