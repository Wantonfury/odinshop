const User = require('user');
const { body, validationResult } = require('express-validator');
const limits = require('../utils/limits');

exports.login = [
  body('username')
    .trim()
    .isLength({ min: limits.username.min, max: limits.username.max })
    .escape(),
  (req, res, next) => {
    
  }
]