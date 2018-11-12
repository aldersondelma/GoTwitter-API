const express = require('express');
const Tweet = require('./tweetController');
const Like = require('./likeController');

const router = express.Router();

router.get('/list_tweets', Tweet.index);
router.post('/tweet', Tweet.store);
router.post('/like/:id', Like.store);

module.exports = router;