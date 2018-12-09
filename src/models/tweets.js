const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema;

const TweetSchema = Schema({
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

TweetSchema.plugin(mongoosePaginate);
mongoose.model('Tweet', TweetSchema);