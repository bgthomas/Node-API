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

        var user = new User(

            {
                email: req.body.email,
                forname: req.body.forname,
                surname: req.body.surname
            }

        );


        user.save(function(err) {

            if (err)

                res.send(err);

            res.json({ message: 'User created!' });

        });

    },

    updateUser: function(req, res) {

        User.findById(req.params.user_id, function(err, user) {

            if (err)

                res.send(err);

            user.email = req.body.email;
            user.forname = req.body.forname;
            user.surname = req.body.surname;

            user.save(function(err) {

                if (err) {
                    res.send(err);
                }

                res.json({ message: 'User updated!' });

            });

        });

    }

}