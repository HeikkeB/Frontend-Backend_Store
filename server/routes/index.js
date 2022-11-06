const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/user', userRouter)

module.exports = router
