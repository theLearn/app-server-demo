var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var userInfoSchema = new Schema({
  username:{type:String, unique:true},
  email:String,
  password:String,
  status:String
});

mongoose.model('UesrInfo', userInfoSchema);
