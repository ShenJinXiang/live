/**
 *  /lib/routes/person.js
 */

const express = require('express');
const uuid = require('node-uuid');
const fileDao = require('../dao/fileDao');
const fname = '../db/person.json';

let router = express.Router();

router.get('/', function(req, res) {
	res.render('person');
});

router.post('/list', function(req, res) {
	try {
		let data = fileDao.read(fname);
		res.json({result: true, data: data});
	} catch (err) {
		res.json({result: false, msg: err.message});
	}
});

router.post('/add', function(req, res) {
	try {
		let obj = req.body;
		obj.id = uuid.v4();
		fileDao.add(fname, obj);
		res.json({result: true});
	} catch (err) {
		res.json({result: false, msg: err.message});
	}
});

router.post('/delete', function (req, res) {
	try {
		let id = req.body.id;
		fileDao.deleteById(fname, id);
		res.json({result: true});
	} catch (err) {
		res.json({result: false, msg: err.message});
	}
});

router.post('/edit', function (req, res) {
	try {
		let obj = req.body;
		fileDao.edit(fname, obj);
		res.json({result: true});
	} catch (err) {
		res.json({result: false, msg: err.message});
	}
});

router.post('/find', function (req, res) {
	try {
		let id = req.body.id;
		let obj = fileDao.find(fname, id);
		res.json({result: true, data: obj});
	} catch (err) {
		res.json({result: false, msg: err.message});
	}
});


module.exports = router;

