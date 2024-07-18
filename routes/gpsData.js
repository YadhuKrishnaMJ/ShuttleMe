const express = require('express');
const router = express.Router();
const GpsData = require('../models/GpsData');

router.post('/gps-data', (req, res) => {
  const { latitude, longitude } = req.body;
  const newGpsData = new GpsData({ latitude, longitude });

  newGpsData.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});

router.get('/latest-gps-data', (req, res) => {
  GpsData.findOne().sort({ timestamp: -1 }).exec((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
