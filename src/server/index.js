const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('a user connected');
})

http.listen(3000, function () {
    console.log('listening on *:3000');
});




// const { names } = require('debug')

// const io = require('socket.io')(3000)

// const users = {}

// io.on('connection', socket => {
//     socket.on('new-user', name => {
//         users[socket.id] = name
//         socket.broadcast.emit('user-connected', name)
//     })
// })