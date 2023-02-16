const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
}, {
    timestamps: true
});

const recipeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    userName: String,
    userAvatar: String,
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
    beanVarietal: {
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
    tempUnit: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    public: {
        type: Boolean,
        default: false
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);