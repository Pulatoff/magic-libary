const env = require('dotenv');
env.config({ path: './config.env' });
const app = require('./app');
const port = process.env.PORT || 8000;

app.listen(port, process.env.URL);
