const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  rollnumber: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
