const env = require('dotenv');
env.config({ path: './config.env' });
const app = require('./app');
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(
  DB,
  () => {
    console.log('Connected to DATABSE');
  },
  (e) => {
    console.log(e);
  }
);

app.listen(port, process.env.URL);
