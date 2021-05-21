module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean
      },
      {timestamps: true}
    );

  schema.method("toJSON", function() {
    const {_id, ...object} = this.toObject();
    object.id = _id;
    return object;
  });

  const Post = mongoose.model("post", schema);
  return Post;
};