var User = require('../models/user');

module.exports = {
    getUser: function(req, res) {

        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });

    },
    getUsers: function(req, res) {

        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });

    },
    postUser: function(req, res) {

        var user = new User();
        user.email = req.body.email;

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    }
}