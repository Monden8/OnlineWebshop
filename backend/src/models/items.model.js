const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const Items = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Number,
    required: true,
    default: new Date(),
  },
  img: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  usage: {
    type: String,
    required: true,
  },
  highestBidder: {
    type: String,
    required: false,
    // default: '',
  },
  username: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('Items', Items, 'webshopItems');
