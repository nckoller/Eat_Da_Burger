const orm = require('../config/orm');

const burger = {
  // display all burgers
  all: function (cb) {
    orm.all('burgers', function (res) {
      cb(res);
    });
  },

  create: function (cols, vals, cb) {
    console.log('creating', vals);
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
