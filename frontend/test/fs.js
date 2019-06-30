const fs = require('fs');
const path = require('path');

const filter = ['node_modules', 'components', 'subComponents'];
const proPath = '/Users/webuy/Desktop/code/businessPlatform/src/views';

const pathList = []

function statisticsVue(pt) {
  let files = fs.readdirSync(pt)
    files
    .filter(file => filter.indexOf(file) === -1)
    .forEach(file => {
      let stat = fs.statSync(`${pt}/${file}`)
      if (stat.isDirectory()) {
        statisticsVue(`${pt}/${file}`)
      }
      let ext = path.extname(file)
      if (['.vue'].indexOf(ext) != -1) {
        let obj = {
          name: file.split('.')[0],
          path: '@'+`${pt}/${file}`.split('src')[1],
          chunkName: pt.split('/')[pt.split('/').length - 1]
        }
        pathList.push(obj)
      }
    })
};

function createRoute(pathList){
  let template = ``
  pathList.forEach(item =>{
    let routerTemplate = `
    {
      path: '${item.name}',
      name: '${item.name}',
      component: () => import(/* webpackChunkName: "${item.chunkName}" */ '${item.path}'),
    },`
    template += routerTemplate
  })
  return `const routers = [${template}]`
}

statisticsVue(proPath);
let routers = createRoute(pathList);

// fs.writeFile('test/router.js', routers,'utf8',function(error){
//   if (error) throw error
//   console.log('写入成功');
// })

let data=fs.readFileSync("test/router.js","utf-8");
let arr = data.split('\n');
let lineflag = 0;
arr.forEach((item, index )=>{
  if(item.includes('/* webpackChunkName: "afterSaleManage" */')){
    lineflag = index;
  }
})
let template =`    {
      path: '>>>>>>>>>>>>>>>>>>>>>',
      name: '>>>>>>>>>>>>>>>>>>>>>',
      component: '>>>>>>>>>>>>>>>>>>>>>',
    },`;
arr.splice(lineflag + 2, 0, template);
fs.writeFile('test/router.js', arr.join('\n'),'utf8',function(error){
  if (error) throw error
  console.log('添加成功');
})
