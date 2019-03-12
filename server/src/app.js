const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var mongoose = require('mongoose');
var Post = require("../model/post");
var Product = require("../model/product");
const app = express()
  var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

//Morgan
app.use(morgan('combined'))

//Body Parser
app.use(bodyParser.json())

//Cors
app.use(cors())

// PORT 8082
app.listen(process.env.PORT || 8082)

// MONGOES CONNECT

mongoose.connect('mongodb+srv://bm_user:demo12345@cluster0-wrxnr.azure.mongodb.net/test?retryWrites=true');

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function(callback){
  console.log("Connection Succeeded");
});

//Test Endpoint

app.post('/posts', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var new_post = new Post({
      title: title,
      description: description
    })
    new_post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true,
        message: 'Post saved successfully!'
      })
    })
  })

  // Fetch all posts
app.get('/posts', (req, res) => {
    Post.find({}, 'title description', function (error, posts) {
      if (error) { console.error(error); }
      res.send({
        posts: posts
      })
    }).sort({_id:-1})
  })


  //Edit Post
  app.get('/posts/:id', (req, res) => {
    var db = req.db;
    Post.findById(req.params.id, 'title description', function (error, post) {
      if (error) { console.error(error); }
      res.send(post)
    })
  })
  

  app.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id,{},function(error, post){
      if (error) { console.error(error); }

      post.title = req.body.title;
      post.description = req.body.description;
      post.save(function(erro){
        if(error){
          console.log(error)
        }
        res.send({
          success:true
        })
      })
    })
  })

  //Delete Post
  app.delete('/posts/:id', (req, res) => {
    var db = req.db;
    Post.remove({
      _id: req.params.id
    }, function(err, post){
      if (err){res.send(err)}else{
      res.send({
        success: true
      })
    }
    })
  })

  app.get('/products', (req, res) => {
    Product.find({}, 'product_name product_price description image_url', function (error, products) {
      if (error) { console.error(error); }
      res.send({
        products: products
      })
    }).sort({_id:-1})
  })

  app.post('/products/add',upload.single('fileToUpload'),(req, res) => {
    res.send(req.file);
  })
