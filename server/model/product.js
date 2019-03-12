var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  product_name: String,
  product_price: Number,
  description:String,
  image_url : String
});
var Products = mongoose.model("products", PostSchema);
module.exports = Products;