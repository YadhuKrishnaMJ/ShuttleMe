require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gpsDataRoutes = require('./routes/gpsData');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', gpsDataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
