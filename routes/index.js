var express = require('express');
var router = express.Router();
require('dotenv').config();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {

  var data = {};

  if(req.query.videoId) {
    // call api
    console.log(req.query.videoId);

    var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies"
      + "&videoId="+req.query.videoId
      + "&key="+process.env.YOUTUBE_API_KEY;

    request(url, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        console.log(body) // Print the google web page.

        res.render('index', {
          title: 'Youtube Comment Collector',
          data: body
        });

      }
    });

    return;
  }

  res.render('index', { title: 'Youtube Comment Collector' });
});

module.exports = router;
