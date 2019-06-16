const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const sqlIndex = require('./index.js');

const filter = ['./node_modules'];

console.log(process.argv, 'process.argv')
// 统计结果
let totalNum = 0;
let projectName, types, rootPath;

const promptList = [{
  type: 'input',
  message: '请输入根目录',
  name: 'rootPath',
},{
  type: 'input',
  message: '请输入项目名称',
  name: 'projectName',
},{
  type: "checkbox",
  message: '请输入查询文件类型',
  name: 'types',
  choices: [
      ".vue",
      ".js",
      ".json",
      ".html",
      ".css"
  ],
  validate: function(val) {
    let done = this.async()
    if(val.length) { // 校验位数
      done(null, true);
    } else {
      done('请选择类型');
    }
  }
}];

inquirer.prompt(promptList).then(
  async (answers) => {
    projectName = answers.projectName;
    rootPath = answers.rootPath;
    types = answers.types;
    await start(rootPath)
    console.log(`总代码行数：${totalNum}`)
    // process.exit();
})

// 获取行数
async function line(path) {
    let rep = await fs.readFileSync(path)
    rep = rep.toString()
    let lines = rep.split('\n')
    sqlIndex.insertRecord([projectName, path, lines.length]).then(()=>{})
    totalNum += lines.length
}

// 递归所有文件夹统计
async function start(pt) {
    let files = fs.readdirSync(pt)
    files
        .map(file => {
            return `${pt}/${file}`
        })
        .forEach(file => {
            let stat = fs.statSync(file)
            if (stat.isDirectory()) {
                if (filter.indexOf(pt) != -1) {
                    return
                }
                start(file)
                return
            }
            let ext = path.extname(file)
            if (types.indexOf(ext) != -1) {
                line(file)
            }
        })
};