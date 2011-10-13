var express = require('express');
var app = express.createServer();
var io = require('socket.io').listen(app);

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
});

app.listen(8000);

io.sockets.on('connection', function (socket) {
  setInterval(function() {
    socket.emit('latlng', { 
      lat: Math.random() * 360 - 180,
      lng: Math.random() * 360 - 180,
      size: Math.random() * 150 + 50
    });
  }, 200);
});

