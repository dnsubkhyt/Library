const express = require('express');
const app = express();
require('dotenv').config()
const axios = require('axios')
const mongoose = require('./config/mongoose');
const bookRoutes = require('./routes/bookRoutes')
const weatherRoutes = require('./routes/weatherRoutes')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Welcome to My Library API!');
})

app.use(express.json());
app.use('/library',bookRoutes)
app.use('/weather', weatherRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

