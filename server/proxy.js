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

const list = [
  {
    proxyName: 'mock',
    target: 'https://a.example.com',
  },
  {
    proxyName: 'daily',
    target: 'https://a.example.com',
  },
  {
    proxyName: 'gray',
    target: 'https://b.example.com',
  },
  {
    proxyName: 'online',
    target: 'https://www.yaruyi.com',
  },
];

const app = new Koa();

app.use(router.routes())
   .use(router.allowedMethods());

app.use(async(ctx, next) => {  
  ctx.respond = false // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response        
  await k2c(httpProxy({        
    target: 'http://daily.xiaoer.webuy.ai',         
    changeOrigin: true,        
    secure: false,  
    onProxyReq(proxyReq, req, res, options) {
      console.log(res, '>>>>>>>>>>>')
      // console.log( proxyReq, '000000')
    },   
    onProxyRes(proxyRes, req, res) {
      proxyRes.headers['x-added'] = 'foobar'; // add new header to response
      delete proxyRes.headers['x-removed']; // remove header from response
    },
    onOpen(proxySocket) {
      console.log(proxySocket, 'proxySocket')
      // listen for messages coming FROM the target here 
      proxySocket.on('data', hybiParseAndLogMessage => {
        console.log(hybiParseAndLogMessage, '234567890')
      });
  }

  }        
  ))(ctx,next);      
  next()
})

app.listen(3000, () => {});
