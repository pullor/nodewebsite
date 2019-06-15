
const query = require('./base.js').query;
// 插入记录
let insertRecord = function( value ) {
  let _sql = "insert into statistics set projectName=?,filePath=?,lineNum=?;"
  return query( _sql, value )
}
// 查询记录
let queryRecord = function( value ) {
  let _sql = "select * from statistics;"
  return query( _sql, value )
}

module.exports = {
  insertRecord,
  queryRecord
}