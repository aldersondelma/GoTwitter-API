const Tweets = require('../models/tweets');

module. exports = {
    async index(req, res) {
        const tweet = await Tweets.find({}).sort('-createdAt');
        return res.json(tweet);
    },

    async store(req, res) {
        const tweet = await Tweets.create(req.body);

        req.io.emit('Tweet', tweet);

        return res.json(tweet);
    }
}