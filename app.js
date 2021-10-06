const express = require('express');
const path = require('path');

// Init app
const app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
// Home Route
app.get('/', (req, res) => {
    res.render('index');
});


// Start Server
app.listen(3000, () => {
  console.log('Server started on port 3000...')
});
