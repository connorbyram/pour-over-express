const Recipe = require("../models/recipe")

module.exports = {
    index,
    show,
    new: newRecipe
    // new: newRecipe
}

function newRecipe(req, res) {
    const bean = Recipe.schema.path('beanVariety').enumValues;
    const process = Recipe.schema.path('processMethod').enumValues;
    const roast = Recipe.schema.path('roastLevel').enumValues;
    const grind = Recipe.schema.path('grindSize').enumValues;
    res.render('recipes/new', { title: 'New Recipe', bean, process, roast, grind } )
}

function show(req, res){
    Recipe.find(req.params.id, function(err, recipe) {
        res.render('recipes/show', { title: 'Flight Detail', recipe });
    });
}

function index(req, res) {
    res.render('recipes/index', { title: 'All Recipes' });
}