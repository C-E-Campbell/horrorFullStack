const express = require('express');
const app = express();
require('dotenv').config();
const massive = require('massive');
const db = require('./Util/connectDB');
db.connect();

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
