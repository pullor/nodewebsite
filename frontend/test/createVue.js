const path = require('path');
const fs = require('fs');

const vuetemplate = 
`<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style></style>
`

fs.writeFile('test/test.vue', vuetemplate,'utf8',function(error){
  if (error) throw error
  // console.log('写入成功');
})



