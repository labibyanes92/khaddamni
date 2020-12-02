const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  lastName: {
        type: String,
        required: true,
      },
  firstName: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  phoneNumber: String,
  
});

module.exports = User = mongoose.model('user', userSchema);