var mongoose = require('mongoose');

var columnSchema = new mongoose.Schema({
    quantity:Number
})

module.exports = mongoose.model('Counter', columnSchema)