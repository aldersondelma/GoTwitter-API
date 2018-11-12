const port = 4005;

const cors = require('cors');

const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server)

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(express.json());
app.use(cors());
app.use(require('../controllers/routes'));

server.listen(port, () => {
    console.log(`Backend is running on port: ${ port }`);
});