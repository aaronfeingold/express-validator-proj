const { check, oneOf } = require('express-validator')

exports.validatePost = [oneOf([check('title').isInt().withMessage('Must be an integer number')])]

