const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage, generateLocationMessage } = require('./utils/message');

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected.');

  socket.emit(
    'newMessage',
    generateMessage('Admin', 'Welcome to the chat app'),
  );

  socket.broadcast.emit(
    'newMessage',
    generateMessage('Admin', 'New user has joined'),
  );

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', coords => {
    io.emit(
      'newLocationMessage',
      generateLocationMessage('Admin', coords.latitude, coords.longitude),
    );
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected.');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
