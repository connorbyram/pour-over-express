const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        default: function() {
            let today = new Date();
            return today
        }
    },
    roaster: {
        type: String
    },
    beanVariety: {
        type: String,
        enum: [
            'Arusha',
            'Benguet',
            'Bergendal/Sidikalang',
            'Blue Mountain',
            'Bourbon',
            'Catuai',
            'Caturra',
            'Catimor',
            'Charrier',
            'Colombian',
            'Etheopia',
            'Ethiopia Guji',
            'Ethiopia Hara',
            'Ethiopia Sidama',
            'Ethiopia Yirgacheffe',
            'French Mission',
            'Geisha/Gesha',
            'Guadeloupe Bonifieur',
            'Kona',
            'Java',
            'K7',
            'Maragogipe',
            'Maragaturra',
            'Mayagüez',
            'Mocha',
            'Mundo-Novo',
            'Orange, Yellow Bourbon',
            'Pacamara',
            'Pacas',
            'Pache Colis',
            'Pache Comum',
            'Ruiru 11',
            'S795',
            'Sagada',
            'Santos',
            'Sarchimor',
            'Sln 9',
            'SL28',
            'SL34',
            'SulawesiToraja-Kalossi',
            'SumatraMandheling',
            'SumatraLintong',
            'Timor-Arabusta',
            'Typica',
            'Uganda',
            'Brutte',
            'Other'
        ],
        required: true
    }, 
    processMethod: {
        type: String,
        enum: ['Natural', 'Washed', 'Semi-Washed', 'Honey', 'Other'],
        required: true
    },
    roastLevel: {
        type: String,
        enum: ['Light', 'Medium', 'Medium-Dark', 'Dark'],
        required: true
    },
    grindSize: {
        type: String,
        enum: [
            'Extra Fine', 
            'Fine', 
            'Medium-fine', 
            'Medium', 
            'Medium-Corse', 
            'Coarse', 
            'Extra-coarse'],
        required: true
    },
    gramsCoffee: {
        type: Number,
        required: true
    },
    gramsWater: {
        type: Number,
        required: true
    },
    waterTemp: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);