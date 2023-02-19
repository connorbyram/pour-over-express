const Recipe = require("../models/recipe")

module.exports = {
    index,
    show,
    new: newRecipe,
    create,
    delete: deleteRecipe,
    edit,
    update
}

function update(req, res){
    req.body.public = !!req.body.public;
    Recipe.findOneAndUpdate(
        { _id: req.params.id, user: req.user._id },
        req.body,
        {new: true},
        function(err, recipe) {
            if (err || !recipe) return res.redirect('/recipes');
            res.redirect(`/recipes/${recipe._id}`);
        }
    );
}

function edit(req, res) {
    const bean = Recipe.schema.path('beanVarietal').enumValues;
    const process = Recipe.schema.path('processMethod').enumValues;
    const roast = Recipe.schema.path('roastLevel').enumValues;
    const grind = Recipe.schema.path('grindSize').enumValues;
    Recipe.findOne({_id: req.params.id, user: req.user._id}, 
        function(err, recipe) {
            res.render('recipes/edit', { title: 'Edit Recipe | Pour/exp', bean, process, roast, grind, recipe } )
    });
}

function deleteRecipe(req, res) {
    Recipe.findOneAndDelete(
        { _id: req.params.id, user: req.user._id },
        function (err, recipe) {
            res.redirect(`/users/${recipe.user._id}`);
        }
    );
}

function create(req, res) {
    req.body.public = !!req.body.public;
    req.body.user = req.user._id;
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('/recipes/new');
        res.redirect(`/recipes/${recipe._id}`);
    });
}

function newRecipe(req, res) {    
    const bean = Recipe.schema.path('beanVarietal').enumValues;
    const process = Recipe.schema.path('processMethod').enumValues;
    const roast = Recipe.schema.path('roastLevel').enumValues;
    const grind = Recipe.schema.path('grindSize').enumValues;
    res.render('recipes/new', { title: 'New Recipe | Pour/exp', bean, process, roast, grind } )
}

function show(req, res){
    Recipe.findById(req.params.id)
        .populate('user')
        .exec(function(err, recipe) {
        res.render('recipes/show', { title: `${recipe.title} | Pour/exp`, recipe });
    });
}

function index(req, res) {
    Recipe.find({})
        .populate('user')
        .exec(function(err, recipes) {
        res.render('recipes/index', { title: 'Browse | Pour/exp', recipes });
    });
}