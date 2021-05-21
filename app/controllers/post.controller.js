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
  debugger;
  console.log(req)
  if (!req.body.title){
    res.status(400).send ({message: "Content cannot be empty" })
    return;
  }
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });
  post
    .save(post)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured"
      })
    })
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
