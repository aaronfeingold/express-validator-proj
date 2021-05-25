const { validationResult } = require('express-validator')
const db = require('../models');
const Post = db.posts

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? {title: { $regex: new RegExp(title), $options: "i"}} : {};

  Post.find(condition)
    .then(data=> {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured"
      })
    })
};

// Create and Save a new Post
exports.create = (req, res) => {
  const errors = validationResult(req)
  
  if (!errors.isEmpty()){
    return res.send(errors)
  } else {
    const post = new Post({
      title: req.body.title
    });
    post
      .save(post)
      .then(data => {
        let num = data.title
        let math = num * 2
        let id = data.id
        res.send({title: math, id: id})
      })
      .catch(err => {
        res.status(500).send({errors: err})
      })
  }
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findById(id)
    .then(data =>{
      if (!data)
        res.status(404).send({ message: "No post found with id" + id})
      else res.send(data)
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Post with id" + id})
    })
}
