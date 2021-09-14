const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true
    },
    user_email: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error('Email is not valid.');
        }
      }
    },
    gender: {
      type: String,
      required: true,
      trim: true,
     
    },
    age: {
      type: Number,
      required: true,
      trim: true
    },
    upload_file: {
      type: String,
      trim: true
    },
    
  },
 
);

const User = mongoose.model('User', userSchema);

module.exports = User;
