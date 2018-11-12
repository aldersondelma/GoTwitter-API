const Tweets = require('../models/tweets');

module.exports = {
    async store (req, res) {
        const tweet = await Tweets.findById(req.params.id);
        tweet.set({ likes: tweet.likes + 1 })
        
        await tweet.save();
        req.io.emit('Like', tweet);
        return res.json(tweet);
    }
}