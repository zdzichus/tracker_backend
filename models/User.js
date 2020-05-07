const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


let userSchema = new Schema({
  user_name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  user_surname: {
    type: String
  },
  user_password: {
    type: String
  },

  user_inactive: {
    type: Boolean
  },
  user_role: {
    type: String
  },
  user_com_role: {
    type: String
  }

}, {

  collection: 'users'
})

userSchema.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', userSchema)