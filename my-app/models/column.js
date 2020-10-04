var mongoose = require('mongoose');

var columnSchema = new mongoose.Schema({
    id: String,
    date: String,
    columns: Array,
    status: String,
    isActive: String,
    creator: String
})

module.exports = mongoose.model('Column', columnSchema)