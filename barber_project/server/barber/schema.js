var mongoose = require('mongoose');
const db = require('../db/index');;
mongoose.Promise = global.Promise;

var barberSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        type: Number
    },
    imageUrl: {

        type: String
    },
    description: {
        type: String
    },
  
    
});


var Barber = mongoose.model('Barber', barberSchema);


module.exports = Barber;