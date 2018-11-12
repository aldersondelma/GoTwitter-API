const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:marc20@ds155653.mlab.com:55653/gotwitter', {
    useNewUrlParser: true
});