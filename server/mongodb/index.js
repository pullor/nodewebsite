const mongoose = require('mongoose');
const db = mongoose.connect("mongodb://localhost/test", {useNewUrlParser: true});

// 账户的数据库模型
var UserSchema = new mongoose.Schema({
  username:String,
  password:String,
  email:String
});

var User = mongoose.model('User',UserSchema);

// 新增数据
var user = {
  username: 'ydj',
  password: '123123',
  email: ''
}


var newUser = new User(user);

exports.User = User;

// newUser.save();
