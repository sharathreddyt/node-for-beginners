const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  lastName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },

  firstName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  isActive: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('users', UserSchema);

// This is other Way to create a model

// const mongoose = require('mongoose');

// const User = mongoose.model('users', {
//   lastName: {
//     type: String,
//     required: true,
//     minlength: 4,
//     trim: true,
//   },

//   firstName: {
//     type: String,
//     required: true,
//     minlength: 4,
//     trim: true,
//   },
//   isActive: {
//     type: Number,
//     default: 0,
//   },
// });

// module.exports = User ;
