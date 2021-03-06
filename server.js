const express = require('express');
const methodOveride = require('method-override');

const PORT = process.env.PORT || 8080;

const app = express();
// Serve static content for the app from the "public" directory
app.use(express.static('public'));

// Parse applicaiton body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const expressHandlebars = require('express-handlebars');

app.use(methodOveride('_method'));
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' })); //double check this
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
const routes = require('./controllers/burger_controller');

app.use(routes);

// Start server
app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});
