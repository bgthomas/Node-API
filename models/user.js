var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: { type: String, required: true },
    forename: { type: String, required: true },
    surname: { type: String, required: true },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);