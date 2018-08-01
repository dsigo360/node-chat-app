const socket = io();

socket.on('connect', function() {
  console.log('Connected to server.');

  socket.emit('createMessage', {
    from: 'An Egg',
    text: 'Yoke',
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
