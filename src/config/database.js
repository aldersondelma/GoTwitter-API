const mongoose = require('mongoose');
//handle promises
mongoose.Promise = global.Promise;

//connect to mongodb
mongoose.connect('mongodb://admin:marc20@ds155653.mlab.com:55653/gotwitter', {
    useNewUrlParser: true
});

const db = mongoose.connection;
//successful connection logs
db.once("connected", () => {
    console.log("\n*************************************");
    console.log(">>># DB connection alive!");
    console.log("*************************************");
});
//handle connection error logs
db.on("error",console.error.bind(console, "\nConnection error:"));