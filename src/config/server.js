//port
const port = process.env.PORT || 4005;
//routes
const routes = require("./routes");
const cors = require('cors');

const BodyParser = require("body-parser");
const express = require('express');
//make an instance of express
const app = express();

//create a http server
const server = require('http').Server(app);
//set the server to support web socket
const io = require('socket.io')(server)

//Middlewares
app.use((req, res, next) => {
    req.io = io;
    //log to the console when requests happen
    console.log(`Something is happening at http://${req.headers.host}/api`);
    return next();
});
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cors());

//register the routes (all the will be prefixed by "/api")
app.use("/api", routes);

server.listen(port, () => {
    console.log(`Backend is running on port: ${ port }`);
});
//connect to the database
require('./database');