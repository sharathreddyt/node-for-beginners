const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 4,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    trim: true,
  },
  emailId: {
    type: String,
    trim: true,
  },
  chits: {
    type: [{ type: Schema.Types.ObjectId, ref: 'chit' }],
  },
});

module.exports = mongoose.model('user', UserSchema);
