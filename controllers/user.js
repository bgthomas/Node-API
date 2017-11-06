var User = require('../models/user');

module.exports = {

    /**
     * @api {get} /users/:id Request User information
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiParam {String} id Users unique ID.
     *
     * @apiSuccess {String} email Email Address of the User.
     * @apiSuccess {String} forname  Forname of the User.
     * @apiSuccess {String} surname surname of the User.
     * @apiSuccess {Date} created Date/time the User was created.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "email": "Ben@ben.com",
     *       "forname": "Ben",
     *       "surname": "Thomas",
     *       "created": "2017-11-05T13:18:02"
     *     }
     *
     */

    getUser: function(req, res) {

        User.findById(req.params.user_id, function(err, user) {

            if (err)

                res.send(err);

            res.json(user);

        });

    },

    /**
     * @api {get} /users/ Request All Users
     * @apiName GetUsers
     * @apiGroup User
     *  
     * @apiSuccess {String} email Email Address of the User.
     * @apiSuccess {String} forname  Forname of the User.
     * @apiSuccess {String} surname surname of the User.
     * @apiSuccess {Date} created Date/time the User was created.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "email": "Ben@ben.com",
     *       "forname": "Ben",
     *       "surname": "Thomas",
     *       "created": "2017-11-05T13:18:02"
     *     }
     *     {
     *       "email": "pippa@pippa.com",
     *       "forname": "Pippa",
     *       "surname": "Thomas",
     *       "created": "2017-11-05T13:18:02"
     *     }
     * 
     */

    getUsers: function(req, res) {

        User.find(function(err, users) {

            if (err)

                res.send(err);

            res.json(users);
        });

    },

    /**
     * @api {post} /users/ Add new User
     * @apiName addUser
     * @apiGroup User
     *
     * @apiParam {String} email Users email address.
     * @apiParam {String} forname Users forname.
     * @apiParam {String} surname Users surname.
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "message":"User created!",
     *       "user": {
     *           "email": "Ben@ben.com",
     *           "forname": "Ben",
     *           "surname": "Thomas",
     *           "created": "2017-11-05T13:18:02"
     *       }
     *     }
     */

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

            res.json({ message: 'User created!', user });

        });
    },

    /**
     * @api {post} /users/:id Update User
     * @apiName updateUser
     * @apiGroup User
     *
     * @apiParam {String} id User id.   
     * @apiParam {String} [email] Users email address.
     * @apiParam {String} [forname] Users forname.
     * @apiParam {String} [surname] Users surname.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       message: 'User updated!',
     *       "user": {
     *           "email": "Ben@ben.com",
     *           "forname": "Ben",
     *           "surname": "Thomas",
     *           "created": "2017-11-05T13:18:02"
     *       }
     *     }
     *
     */

    updateUser: function(req, res) {

        User.findById(req.params.user_id, function(err, user) {

            if (err)

                res.send(err);

            user.email = req.body.email;
            user.forname = req.body.forname;
            user.surname = req.body.surname;

            user.save(function(err) {

                if (err)
                    res.send(err);

                res.json({ message: 'User updated!', user });

            });

        });

    },


    /**
     * @api {delete} /users/:id Delete User
     * @apiName deleteUser
     * @apiGroup User
     *
     * @apiParam {String} id User id.   
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       message: 'User deleted'
     *     }
     *
     */
    deleteUser: function(req, res) {

        User.remove({

            _id: req.params.user_id

        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'User deleted!' });

        });

    }

}