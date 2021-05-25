const { check, oneOf } = require('express-validator')

module.exports = app => { 
	const posts = require('../controllers/post.controller.js')

	var router = require('express').Router()

	router.post('/', oneOf([check('title').isInt().withMessage('Must be an integer number')]), posts.create);

	router.get('/', posts.findAll);

	router.get('/:id', posts.findOne)

	app.use('/api/posts', router)
};

