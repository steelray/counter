const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const keys = require('../configs/keys');

module.exports.login = (req, res) => {
  try {
    const userModel = new User();
    const user = userModel.getUser();
    if (user) {
      const passValidate = bcrypt.compareSync(req.body.password, user.password);

      if (passValidate) {
        const token = jwt.sign({
            username: user.username
          },
          keys.jwtSecret, {
            expiresIn: 60 * 60
          }
        );

        res.status(200).json({
          token: `Bearer ${token}`
        });
      } else {
        res.status(401).json({
          message: 'Incorrect username or password'
        });
      }
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'Bad request'
    });
  }
};