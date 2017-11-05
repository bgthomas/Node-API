var express = require('express');
var userCtrl = require('./userCtrl');

var router = express.Router();

router.route('/users/:user_id').get(userCtrl.getUser);
router.route('/users').post(userCtrl.postUser);
router.route('/users').get(userCtrl.getUsers);
router.route('/users/:user_id').put(userCtrl.updateUser);

module.exports = router;