const devices = require('puppeteer/DeviceDescriptors')
const puppeteer = require('puppeteer');

(async () => {    
  const browser = await puppeteer.launch({        
    headless: true    
  })    
  const page = await browser.newPage()   
  await page.goto('http://www.baidu.com')    
  console.log(page, 'page') 
  // await page.emulate(devices['iPhone X'])
  // await page.type('#kw', 'puppeteer')
  // await page.click('#su')
  // await page.waitForNavigation({ timeout: 3000 })
  await page.screenshot({        
    path: '/Users/webuy/Desktop/nodewebsite/baiduIphoneX-search.png'    
  })})()