var mongoose = require('mongoose');

var columnSchema = new mongoose.Schema({
    id: String,
    columns: Array,
    creator: String
})

module.exports = mongoose.model('Column', columnSchema)