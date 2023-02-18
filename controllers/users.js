const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports = {
    // index,
    show
}

function show(req, res) {
    User.findById(req.params.id, function(err, profile) {
        Recipe.find({ user: profile }, function(err, recipes) {
            res.render('users/show',  { title: `${profile.name} | Pour/exp`, profile, recipes })
        });
    });
};