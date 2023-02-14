const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /recipes
router.get('/', ensureLoggedIn, recipesCtrl.index);
// GET /recipes/new
router.get('/new', ensureLoggedIn, recipesCtrl.new);
// GET /recipes/:id
router.get('/:id', ensureLoggedIn, recipesCtrl.show);
// POST /recipes
router.post('/', ensureLoggedIn, recipesCtrl.create);
// DELETE /recipes/:id
router.delete('/:id', ensureLoggedIn, recipesCtrl.delete);


module.exports = router;
