require('../models/tweets');
const mongoose = require("mongoose");

const Tweets = mongoose.model("Tweet");

module. exports = {
    async index(req, res) {
        const query = {};
        const options = {
            page: req.query.page || 1,
            limit: 10,
            sort: "-createdAt"
        };
        try {
            const tweet = await Tweets.paginate(query,options);
            res.json(tweet);            
        } catch (err) {
            res.send(err);
        }
    },

    async store(req, res) {
        try {
            const tweet = await Tweets.create(req.body);

            req.io.emit('Tweet', tweet);
    
            res.json(tweet);
        } catch (err) {
            res.send(err);    
        }
    },

    async like (req, res) {
        try {
            const tweet = await Tweets.findById(req.params._id);
            tweet.set({ likes: tweet.likes + 1 })
            
            await tweet.save();
            req.io.emit('Like', tweet);
            res.json(tweet);
        } catch (err) {
            res.send(err);
        }
    },

    async updateTweet(req,res) {
        try {
            const { _id } = req.params;
            const { content } = req.body;
            const tweet = await Tweets.findOneAndUpdate(_id,content, { new: true });

            tweet.save();
            req.io.emit("Update",tweet);
            res.json(tweet);
        } catch (err) {
            res.send(err);
        }
    },
    async destroy(req,res) {
        try {
            await Tweets.findOneAndDelete({ _id: req.params._id });
            res.json({ Warning: "Successfully deleted." });
        } catch (err) {
            res.send(err);
        }
    }
}