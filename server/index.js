const express = require('express');
const app = express();
require('dotenv').config();
const massive = require('massive');

const connect = async () => {
  await massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  })
    .then((db) => {
      app.set('db', db);
      console.log('connected');
    })
    .catch((err) => console.log(err));
};
connect();

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`);
});
