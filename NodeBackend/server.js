const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fileupload = require('express-fileupload');
const cors = require('cors');
const axios = require('axios');

const app = express();
require('dotenv').config();

// Bodyparser middleware
app.use(express.json());
app.use(cors());
// fileupload middleware
app.use(
  fileupload({
    useTempFiles: true,
  })
);

// DB config
const db = process.env.MONGODB_URL || 'mongodb://localhost/annadata';

// connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongoose connected..'))
  .catch((err) => console.log(err));

// use routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/weatherForecast', require('./routes/api/weatherForecast'));
app.use('/api/otp', require('./routes/api/otp'));
app.use('/api/upload', require('./routes/api/upload'));
app.use('/api/ambeedata', require('./routes/api/ambeedata'));

app.use('/api/questions', require('./routes/api/questions'));
app.use('/api/infos', require('./routes/api/infos'));

// serve static assets if we are in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.get('/api/fire', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(
      `https://api.ambeedata.com/fire/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
      {
        headers: {
          'x-api-key': '61a253402670cbee70655a556c7cdc5e0660f28e115cfd0ef8a15a932db8f4f7',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch fire data' });
  }
});

app.get('/api/humidity', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(
      `https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
      {
        headers: {
          'x-api-key': '61a253402670cbee70655a556c7cdc5e0660f28e115cfd0ef8a15a932db8f4f7',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Humidity API Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch humidity data' });
  }
});

app.get('/api/air', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(
      `https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
      {
        headers: {
          'x-api-key': '61a253402670cbee70655a556c7cdc5e0660f28e115cfd0ef8a15a932db8f4f7',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Air API Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch air quality data' });
  }
});

app.get('/api/pollen', async (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const response = await axios.get(
      `https://api.ambeedata.com/latest/pollen/by-lat-lng?lat=${lat}&lng=${lng}`,
      {
        headers: {
          'x-api-key': '61a253402670cbee70655a556c7cdc5e0660f28e115cfd0ef8a15a932db8f4f7',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error('Pollen API Error:', err.message);
    res.status(500).json({ error: 'Failed to fetch pollen data' });
  }
});


app.listen(port, () => console.log(`server started on port ${port}`));
