const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  user_name: {
    type: String
  },
  email: {
    type: String
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
  user_app_role: {
    type: String
  }
}, {

  collection: 'users'
})

module.exports = mongoose.model('User', userSchema)