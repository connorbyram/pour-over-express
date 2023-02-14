const Recipe = require("../models/recipe")

module.exports = {
    index,
    show,
    new: newRecipe,
    create
}

function create(req, res) {
    req.body.public = !!req.body.public;
    req.body.user = req.user._id;
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        console.log(err);
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
    });
}

function newRecipe(req, res) {    
    const bean = Recipe.schema.path('beanVarietal').enumValues;
    const process = Recipe.schema.path('processMethod').enumValues;
    const roast = Recipe.schema.path('roastLevel').enumValues;
    const grind = Recipe.schema.path('grindSize').enumValues;
    res.render('recipes/new', { title: 'New Recipe', bean, process, roast, grind } )
}

function show(req, res){
    Recipe.findById(req.params.id)
        .populate('user')
        .exec(function(err, recipe) {
        res.render('recipes/show', { title: 'Flight Detail', recipe });
    });
}

function index(req, res) {
    Recipe.find({})
        .populate('user')
        .exec(function(err, recipes) {
        res.render('recipes/index', { title: 'All Recipes', recipes });
    });
}