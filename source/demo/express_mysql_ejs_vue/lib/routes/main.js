/**
 *  /lib/routes/main.js
 */

const express = require('express');

let router = express.Router();

router.get('/', function(req, res) {
	res.render('person/index');
});

module.exports = router;
