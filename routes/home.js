const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Pour Over Express' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    // Optional
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', function (req, res, next) {
  const redirectTo = req.session.redirectTo;
  delete req.session.redirectTo;
  passport.authenticate(
    'google',
    {
      successRedirect: redirectTo || '/', //-> replace '/' as desired
      failureRedirect: '/'
    }
  )(req, res, next);  // Call the middleware returned by passport
});

router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/');
  });
});


module.exports = router;