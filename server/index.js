const Koa = require('koa')
const cors = require('koa2-cors')
const router = require('koa-router')()
const koaBodyparser = require('koa-bodyparser');

const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const views = require('koa-views');
const staticCache = require('koa-static-cache');

const app = new Koa();
app.use(cors({
  origin: function (ctx) {
      // if (ctx.url === '/cors') {
          return "*"; // 允许来自所有域名请求
      // }
      // return 'http://localhost:8080';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(koaBodyparser());

router.get('/statistics/query', async (ctx, next) => {
  ctx.response.body = '<h1>index page</h1>'
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000, () => {});