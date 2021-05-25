module.exports = app => { 
	const pv = require('../validators/post.validators')
	const posts = require('../controllers/post.controller.js')

	var router = require('express').Router()

	router.post('/', pv.validatePost, posts.create);

	router.get('/', posts.findAll);

	router.get('/:id', posts.findOne)

	app.use('/api/posts', router)
};

