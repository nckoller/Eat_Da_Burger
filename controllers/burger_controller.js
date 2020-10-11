const express = require('express');
const burger = require('../models/burger');

const router = express.Router();
// Display all burgers from the db
router.get('/', function (req, res) {
  burger.all(function (data) {
    const handlebarsObj = {
      burgers: data,
    };
    console.log(handlebarsObj);
    res.render('index', handlebarsObj);
  });
});
// Add a new burger to the db
router.post('/api/burgers/', function (req, res) {
  console.log("Here's my req", req.body);
  burger.create(['burger_name'], [req.body.burger_name], function (result) {
    res.redirect('/');
  });
});

// Change devoured status to true
router.put('/api/burgers/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);
  console.log(req.body);
  burger.update(
    {
      devoured: 1,
      // req.body.devoured
    },
    condition,
    function (result) {
      res.redirect('/');
    }
  );
});

module.exports = router;
