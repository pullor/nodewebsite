const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const router = require('./routers/index')
const config = require('./config/index')

const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const views = require('koa-views')
const staticCache = require('koa-static-cache')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})

