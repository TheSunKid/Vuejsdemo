var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  content:String,
  Data : Date
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;