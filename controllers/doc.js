var path = require("path");
var htmlDir = "../docs/";

module.exports = {

    displayPage: function(req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, '../docs') });
    }

}