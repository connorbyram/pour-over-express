const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /
router.get('/', ensureLoggedIn, recipesCtrl.index);
// GET /new
router.get('/new', ensureLoggedIn, recipesCtrl.new);
// GET /:id
router.get('/:id', ensureLoggedIn, recipesCtrl.show);
// GET /:id/edit
router.get('/:id/edit', ensureLoggedIn, recipesCtrl.edit);
// POST /
router.post('/', ensureLoggedIn, recipesCtrl.create);
// POST /:id/update
router.put('/:id', ensureLoggedIn, recipesCtrl.update);
// DELETE /:id
router.delete('/:id', ensureLoggedIn, recipesCtrl.delete);


module.exports = router;
