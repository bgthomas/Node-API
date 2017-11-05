var express = require('express');
var userCtrl = require('../controllers/user');
var docCtrl = require('../controllers/doc');

var router = express.Router();

//API Routes
router.route('/users/:user_id').get(userCtrl.getUser);
router.route('/users').post(userCtrl.postUser);
router.route('/users').get(userCtrl.getUsers);
router.route('/users/:user_id').put(userCtrl.updateUser);
router.route('/users/:user_id').delete(userCtrl.deleteUser);

module.exports = router;