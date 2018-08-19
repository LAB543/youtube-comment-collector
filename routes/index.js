var express = require('express');
var router = express.Router();
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {

  var data = {};

  if(req.query.id) {
    // call api
    console.log(req.query.videoId);

    var url = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies"
      + "&videoId="+req.query.videoId
      + "&key="+process.env.YOUTUBE_API_KEY;

  }

  res.render('index',
    {
      title: 'Youtube Comment Collector',
      data: data
    });
});

module.exports = router;
