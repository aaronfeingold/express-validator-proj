module.exports = app => { 
	const pv = require('../validators/post.validators')
	const posts = require('../controllers/post.controller.js')

	var router = require('express').Router()

	router.post('/', pv.validatePost, posts.create);
	
	router.get('/', posts.get);

	app.use('/api/posts', router)
};

