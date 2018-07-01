const mongoose = require('mongoose');

module.exports = mongoose.model('Target', {
  clicks: Number,
  name: String
});