const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('../configs/keys');
const User = require('../models/user');
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwtSecret
}


module.exports = passport => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      try {
        const userModel = new User();
        const user = userModel.getUser();
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
}