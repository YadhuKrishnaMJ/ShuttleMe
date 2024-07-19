const express = require('express');
const router = express.Router();
const GpsData = require('../models/GpsData');

router.post('/gps-data', async (req, res) => {
  const { latitude, longitude } = req.body;
  const newGpsData = new GpsData({ latitude, longitude });

  try {
    await newGpsData.save();
    res.status(200).send('Data saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

router.get('/latest-gps-data', async (req, res) => {
  try {
    const latestData = await GpsData.findOne().sort({ timestamp: -1 }).exec();
    res.json(latestData);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
