const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

module.exports = router;

// //Get /users
// router.get('/users', ensureLoggedIn, usersCtrl.index);

//Get /users/:id
router.get('/users/:id', ensureLoggedIn, usersCtrl.show);