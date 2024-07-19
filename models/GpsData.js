const mongoose = require('mongoose'); //Mongoose Module for MongoDB Connection

const gpsSchema = new mongoose.Schema({ 
  latitude: Number,
  longitude: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GpsData', gpsSchema);
