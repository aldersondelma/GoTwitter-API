const express = require('express');
const Tweet = require('../controllers/tweetController');

const router = express.Router();

router.get('/tweet', Tweet.index);
router.post('/tweet', Tweet.store);
router.put('/like/:_id', Tweet.like);
router.put('/tweet/:_id', Tweet.updateTweet);
router.delete('/tweet/:_id', Tweet.destroy);

module.exports = router;