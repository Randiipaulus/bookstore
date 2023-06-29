var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

// todo  functions to routes
router.get('/', booksCtrl.home);
router.get('/all', booksCtrl.all);
router.get('/new', booksCtrl.new);
router.get('/:id', booksCtrl.show);

// action functions
router.post('/all', booksCtrl.create);


module.exports = router;
