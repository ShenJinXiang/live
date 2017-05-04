// app.js

var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

  superagent.post('192.168.253.221:8888/common/queryToken')
		.type('form')
		.send({params:'KCWLUXe9NoJq9/dglh+bU3WC8t7W2y5h'})
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
			console.log(sres.text);
	  });
