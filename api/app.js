const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
require('./middleware/passport')(passport);

// routes
const homeRoutes = require('./routes/home');
const authRoutes = require('./routes/auth');
const counterRoutes = require('./routes/counter');

app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/counter', passport.authenticate('jwt', {
  session: false
}), counterRoutes);

module.exports = app;