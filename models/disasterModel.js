const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: { type: String, required: true },
  severity: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

const Disaster = mongoose.model('Disaster', disasterSchema);

module.exports = Disaster;
