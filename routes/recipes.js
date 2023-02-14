const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /recipes
router.get('/', ensureLoggedIn, recipesCtrl.index);
// GET /recipes/new
router.get('/new', ensureLoggedIn, recipesCtrl.new);
// POST /recipes
router.post('/', recipesCtrl.create);


module.exports = router;
