const Recipe = require("../models/recipe")

module.exports = {
    index,
    show,
    new: newRecipe
    // new: newRecipe
}

function newRecipe(req, res) {
    res.render('recipes/new', { title: 'New Recipe' } )
}

function show(req, res){
    Recipe.find(req.params.id, function(err, recipe) {
        res.render('recipes/show', { title: 'Flight Detail', recipe });
    });
}

function index(req, res) {
    res.render('recipes/index', { title: 'All Recipes' });
}