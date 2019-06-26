const Koa = require('koa')
const cors = require('koa2-cors')
const router = require('koa-router')()
const koaBodyparser = require('koa-bodyparser');
const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');


const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const views = require('koa-views');
const staticCache = require('koa-static-cache');


const app = new Koa();

app.use(async(ctx, next) => {  
  console.log(ctx, ">>>>>>>>>>>>>>>>>>>>>")  
  if (1) { //匹配有api字段的请求url       
    ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response        
    await k2c(httpProxy({        
      target: 'http://daily.xiaoer.webuy.ai',         
      changeOrigin: true,        
      secure: false,        
      pathRewrite: {        
        '^/api': ''            
      }        
    }        
    ))(ctx,next);    
  }    
  await next()
})

app.use(cors({
  origin: function (ctx) {
    return "*"; // 允许来自所有域名请求
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