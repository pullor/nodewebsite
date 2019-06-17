const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const page = require('./page')
const statistic = require('./statistic')


console.log(statistic.allowedMethods, 'statistic.allowedMethods')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())
router.use('/statistic', page.routes(), statistic.allowedMethods())

module.exports = router
