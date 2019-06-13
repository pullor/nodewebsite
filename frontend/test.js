const ora = require('ora');
const path = require('path');
const spinner = ora('Loading unicorns').start();

const chalk = require('chalk');
console.log(chalk.red.bold.bgWhite('Hello World'));


spinner.color = 'yellow';
spinner.text = 'Loading rainbows';

setTimeout(() => {
  spinner.stop();//结束
}, 2000);

const a = path.join('/foo', 'bar', 'baz/asdf', 'quux');

console.log(a);