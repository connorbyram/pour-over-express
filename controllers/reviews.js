const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports = {
    create,
    delete: deleteReview
}

function deleteReview(req, res, next) {
    Recipe.findOne({
        'reviews._id': req.params.id,
        'reviews.user': req.user._id
    }).then(function(recipe) {
        if (!recipe) return res.redirect(`/recipes/${recipe._id}`);
        recipe.reviews.remove(req.params.id);
        recipe.save().then(function() {
            res.redirect(`/recipes/${recipe._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        recipe.reviews.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}