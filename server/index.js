require('dotenv').config();
const express = require('express');
const massive = require('massive');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
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

app.post('/api/login', async (req, res) => {
  const { user, pass } = req.body;
  const db = req.app.get('db');
  const profile = await db.check_for_user(user);
  // profile is an array of users in db with this specfic username, should only be one, must be unique
  if (profile[0]) {
    console.log('here');
    let checkPass = bcrypt.compareSync(pass, profile[0].password);
    if (checkPass) {
      res
        .status(200)
        .send(JSON.stringify({ call: 'login', status: 200, success: true }));
    } else {
      res
        .status(500)
        .send(
          JSON.stringify({
            call: 'login - password incorrect',
            status: 500,
            success: false,
          })
        );
    }
  } else {
    res.status(500).send(
      JSON.stringify({
        call: 'login - no user with that name',
        status: 500,
        success: false,
      })
    );
  }
});

app.post('/api/register', async (req, res) => {
  const { user, pass } = req.body;
  const db = req.app.get('db');
  try {
    await bcrypt.hash(pass, 10, function (err, hash) {
      db.register(user, hash);
    });
    res
      .status(200)
      .send(JSON.stringify({ call: 'register', status: 200, success: true }));
  } catch (err) {
    res
      .status(500)
      .send(JSON.stringify({ call: 'register', status: 500, success: false }));
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`);
});
