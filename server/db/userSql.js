const query = require('./base.js').query;

// 注册用户
let insertData = function( value ) {
  let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
  return query( _sql, value )
}
// 删除用户
let deleteUserData = function( name ) {
  let _sql = `delete from users where name="${name}";`
  return query( _sql )
}
// 查找用户
let findUserData = function( name ) {
  let _sql = `select * from users where name="${name}";`
  return query( _sql )
}

module.exports = {
  insertData,
  deleteUserData,
  findUserData
}