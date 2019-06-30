const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});

// 账户的数据库模型
const UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  email:String
});
// 接口数据模型
const Api = new mongoose.Schema({
  api: String,
  cuurentDomain: String,
  domainList: Array,
})

const User = mongoose.model('User',UserSchema);
const ApiInfo = mongoose.model('ApiInfo',Api);

// 新增数据
const user = {
  username: 'ydj',
  password: '123123',
  email: ''
}

const newUser = new User(user);
// newUser.save();

exports.User = User;
exports.ApiInfo = ApiInfo;