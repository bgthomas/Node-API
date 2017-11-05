var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    forname: String,
    surname: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);