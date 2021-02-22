require('dotenv').config();
const express = require('express');
const massive = require('massive');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const expressSession = require('express-session');

const app = express();

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

// connecting to database
connect();

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:8293',
    credentials: true,
  })
);
app.use(
  expressSession({
    secret: 'guitar',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('guitar'));

app.post('/api/login', (req, res) => {
  console.log(req.body);
});

app.post('/api/register', async (req, res) => {
  const { user, pass } = req.body;
  const db = req.app.get('db');
  await db.register(user, pass);
  res.status(200).send({ status: 200, success: true });
});

app.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`);
});
