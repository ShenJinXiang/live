// app.js

var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

  superagent.post('192.168.253.221:8888/hyfw/ts/tsPage')
		.type('form')
		.send({params:'{"pageNum": "1", "pageSize": "10"}'})
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
			console.log(sres.text);
	  });
