const Koa = require('koa')
const httpProxy = require('http-proxy-middleware');
const k2c = require('koa2-connect');
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')()
const mongodb = require('./mongodb/index.js');

router.get('/', async (ctx, next) => {
	let val = null
	const data = await mongodb.User.findOne({username: 'ydj'})
	const result = {
		code:200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
})

const app = new Koa();

app.use(router.routes())
   .use(router.allowedMethods());

app.use(async(ctx, next) => {  
  ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response        
  await k2c(httpProxy({        
    target: 'http://daily.xiaoer.webuy.ai',         
    changeOrigin: true,        
    secure: false,              
  }        
  ))(ctx,next);      
  next()
})

app.listen(3000, () => {});
