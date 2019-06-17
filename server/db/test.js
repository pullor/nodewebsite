const query = require('./base.js').query;

query(`select * from statistics where lineNum > 500;`)
.then(res=>{
  res.forEach(item => {
    console.log(item.filePath, item.lineNum, 'item')
  });
  console.log(res.length, 'res.length');
})
