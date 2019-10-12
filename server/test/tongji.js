const fs = require('fs');
const readFile = require("util").promisify(fs.readFile);


async function run(filePath) {
  try {
      const fr = await readFile(filePath,"utf-8");
      const reg = /shopApi(\S*)\(/g
      const arr = fr.match(reg)
      console.log(arr, arr.length, 'arr')
   } catch (err) {
      console.log('Error', err);
   }    
}

// const filePath =


run('/Users/webuy/Desktop/code/sh-crm/src/views/sh-crm/secondKill/SecondKillManager.vue')


123123