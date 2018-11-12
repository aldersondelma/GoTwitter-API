const mongoose = require('mongoose');

const TweetSchema = mongoose.Schema({
    author: {
        type: String,
        required:true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tweets', TweetSchema);