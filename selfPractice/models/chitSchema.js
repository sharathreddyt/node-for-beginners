const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 4,
      trim: true,
    },

    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
    amount: {
      type: Number,
      default: 0,
    },
    users: {
      type: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('chit', chitSchema);
