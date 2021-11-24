const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// Init app
const app = express();

// Bring in Models
let Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Routes
// Home Route
app.get('/', (req, res) => {
    let articles = [
      {
        id:1,
        title: 'Article One',
        author: 'Divi Mart',
        body: 'This is article one'
      },
      {
        id:2,
        title: 'Article Two',
        author: 'John Doe',
        body: 'This is article two'
      },
      {
        id:3,
        title: 'Article Three',
        author: 'Divi Mart',
        body: 'This is article three'
      }
    ];
    res.render('index', {
      title:'Article',
      articles: articles
    });
});

// Add Route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title:'Add Article'
  });
});

// Add Sumit POST Route
app.post('/articles/add', function(req, res){
  let article = new Article()
  article.title = req.body.title;
  article.author = req.body.author;
  article.body = req.body.body;

  article.save(function(err){
    if(err){
      console.log(err)
      return;
    } else {
      res.redirect("/")
    }
  });
});


// Start Server
app.listen(3000, () => {
  console.log('Server started on port 3000...')
});
