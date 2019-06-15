let statisticsSql = require('./statisticsSql.js');
let commentSql = require('./commentSql.js');
let postSql = require('./postSql.js');
let userSql = require('./userSql.js');

module.exports = {
    ...commentSql,
    ...postSql,
    ...statisticsSql,
    ...userSql
}