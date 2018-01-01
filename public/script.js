var socket = io.connect('http://localhost:3000');

var $messageBoard = document.getElementById('message-board'),
  $name = document.getElementById('name'),
  $message = document.getElementById('message'),
  $button = document.getElementById('btn-send');

$button.addEventListener('click', function(evt) {
  socket.emit('chat', {
    message: $message.value,
    name: $name.value
  });
});

socket.on('safe-chat', function(data) {
  var board = $messageBoard.innerHTML;
  board += '<li>' + data.name + '</li>';
  board += '<p>' + data.message + '</p>';
  $messageBoard.innerHTML = board;
});